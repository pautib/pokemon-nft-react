import { useCallback, useEffect, useState } from 'react';
import { InterfaceAbi } from 'ethers';
import { useSmartContract } from './useSmartContract';
import { Pokemon, PokemonContract } from '../config';

export const usePokemonSmartContract = (pokemonContractAddress: string, pokemonContractAbi: InterfaceAbi) => {

    const {contract: pokemonContract, contractError, setContractError } = useSmartContract<PokemonContract>(pokemonContractAddress, pokemonContractAbi);
    const [isContractLoaded, setIsContractLoaded] = useState(false);

    useEffect(() => {

      const listener = (tokenId: number, nickname: string, personalityValue: number) => {
        console.log("New Pokemon NFT minted:", tokenId, nickname, personalityValue);
      };
  
      if (pokemonContract) {
        pokemonContract.addListener("NewPokemon", listener);
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
          console.log(pokemonContract)
        console.log("Contract and signer are available");
        console.log("Pokemon data:", pokemon);
        console.log("Pokemon nickname:", nickName);
        console.log("Encoded image:", encodedImg);
        
          pokemonContract.mintPokemon(
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
          setContractError(error.message);
        });
        
      } else {
        setContractError("Contract or signer is not available");
        console.error("Contract or signer is not available");
      }
    
      }, [pokemonContract]);


      return {
        createPokemonNFT,
        contractError,
        isContractLoaded
      }

}