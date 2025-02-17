import { useCallback, useEffect, useMemo } from 'react';
import { Pokemon } from '../config';
import { useSmartContractProvider } from './userSmartContractProvider';
import { ErrorDescription } from 'ethers';
import { getErrorDescription } from '../config';


export const usePokemonSmartContract = (/*pokemonContractAddress: string, pokemonContractAbi: InterfaceAbi*/) => {

  const {contract: theContract, contractError, setContractError, isContractLoaded } = useSmartContractProvider();
  const pokemonContract = useMemo(() => theContract, [theContract]);

  useEffect(() => {

    const listener = (tokenId: number, nickname: string, personalityValue: number) => {
      console.log("New Pokemon NFT minted:", tokenId, nickname, personalityValue);
    };

    if (pokemonContract) {
      pokemonContract.addListener("NewPokemon", listener);
      setContractError(null)
    }

    return () => {
      if (pokemonContract) {
        pokemonContract.removeListener("NewPokemon", listener);
      }
    }

  }, [pokemonContract]);


  const createPokemonNFT = useCallback(async(pokemon: Pokemon, imgUrl: string, nickName: string) => {

    let secondAbility = "";

    if (pokemon.abilities.length > 1) {
      secondAbility = pokemon.abilities[1];
    }

    if (pokemonContract) {
      
        pokemonContract.mintPokemon(
        pokemon.id, 
        nickName, 
        imgUrl, 
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
        let customError : (ErrorDescription | null) = pokemonContract.interface.parseError(error.data);
        let errorDescription;
        if (customError) {
          errorDescription = getErrorDescription(customError.name);
        }
        setContractError(errorDescription ? errorDescription : error.message);
      });
      
    } else {
      setContractError("Contract or signer is not available");
      console.error("Contract or signer is not available");
    }

  }, [pokemonContract, contractError]);


  return {
    createPokemonNFT,
    contractError,
    isContractLoaded,
    setContractError
  }

}