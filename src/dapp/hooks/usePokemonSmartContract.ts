import { useCallback, useEffect, useState } from 'react';
import { InterfaceAbi } from 'ethers';
import { useSmartContract } from './useSmartContract';
import { Pokemon } from '../config';

export const usePokemonSmartContract = (pokemonContractAddress: string, pokemonContractAbi: InterfaceAbi) => {

    const {contract: pokemonContract, contractError } = useSmartContract(pokemonContractAddress, pokemonContractAbi);
    const [isContractLoaded, setIsContractLoaded] = useState(false);

    useEffect(() => {
      console.log(pokemonContract)
      
      const listener = (tokenId: number, nickname: string, personalityValue: number) => {
        console.log("New Pokemon NFT minted:", tokenId, nickname, personalityValue);
      };
  
      if (pokemonContract) {
        pokemonContract.addListener("NewPokemon", listener);
        console.log('Here')
        setIsContractLoaded(true);
      }
  
      return () => {
        if (pokemonContract) {
          pokemonContract.removeListener("NewPokemon", listener);
          setIsContractLoaded(false);
        }
      }
  
    }, [pokemonContract]);



    const createPokemonNFT = useCallback(async(pokemon: Pokemon, encodedImg: string, nickName: string) => {

        let secondAbility = "";
    
        if (pokemon.abilities.length > 1) {
          secondAbility = pokemon.abilities[1];
        }
        
        if (pokemonContract) {
    
          console.log("Contract and signer are available");
          console.log("Pokemon data:", pokemon);
          console.log("Pokemon nickname:", nickName);
          console.log("Encoded image:", encodedImg);
          
          await pokemonContract.mintPokemon(
            pokemon.id, 
            nickName, 
            encodedImg, 
            pokemon.abilities[0], 
            secondAbility, 
            pokemon.baseHp, 
            pokemon.baseAtk, 
            pokemon.baseDef, 
            pokemon.baseSpAtk, 
            pokemon.baseSpDef, 
            pokemon.baseSpeed, 
            pokemon.height, 
            pokemon.weight
          )
          .then((tx) => {
            console.log("Transaction sent:", tx);
            return tx.wait();
          })
          .then((receipt) => {
            console.log("Transaction receipt:", receipt);
          })
          .catch((error) => {
            console.error("Error minting Pokemon NFT:", error);
          });
          
        } else {
          console.error("Contract or signer is not available");
        }
    
      }, [pokemonContract]);


      return {
        createPokemonNFT,
        contractError,
        isContractLoaded
      }

}