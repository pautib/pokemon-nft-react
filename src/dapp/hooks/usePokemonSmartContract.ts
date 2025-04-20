import { useCallback, useEffect, useMemo } from 'react';
import { Pokemon, PokemonNFT } from '../config';
import { useSmartContractProvider } from './userSmartContractProvider';
import { ErrorDescription } from 'ethers';
import { getErrorDescription } from '../config';
import { useQuery } from '@tanstack/react-query';

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

  const { isPending: isLoadingPokemons, error: contractQueryError, data: pokemonNFTs } = useQuery({
    queryKey: ['getPokemons'],
    queryFn: () => getPokemons(),
    enabled: !!pokemonContract,
    staleTime: 0
  });


  const createPokemonNFT = useCallback(async(pokemon: Pokemon, imgUrl: string, nickName: string) => {

    let secondAbility = "";

    if (pokemon.abilities.length > 1) {
      secondAbility = pokemon.abilities[1];
    }

    if (pokemonContract) {
      
        pokemonContract.mintPokemon(
        pokemon.pokedexId,
        pokemon.name,
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


  const releasePokemonNFT = useCallback(async(pokemonId: number) => {

    if (pokemonContract) {
      
      pokemonContract.burnPokemon(
        pokemonId
      )
      .then((tx) => {
        console.log("Transaction sent:", tx);
        return tx.wait();
      })
      .then((receipt) => {
        console.log("Transaction receipt:", receipt);
      })
      .catch((error) => {
        console.error("Error releasing Pokemon NFT:", error);
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


  const levelUpPokemon = useCallback(async(pokemonId: number) => {

    if (pokemonContract) {
      
      pokemonContract.levelUp(
        pokemonId
      )
      .then((tx) => {
        console.log("Transaction sent:", tx);
        return tx.wait();
      })
      .then((receipt) => {
        console.log("Transaction receipt:", receipt);
      })
      .catch((error) => {
        console.error("Error leveling up Pokemon NFT:", error);
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


  const changePokemonNickName = useCallback(async(pokemonId: number, newName: string) => {

    if (pokemonContract) {
      
      pokemonContract.changePokemonNickName(
        pokemonId,
        newName
      )
      .then((tx) => {
        console.log("Transaction sent:", tx);
        return tx.wait();
      })
      .then((receipt) => {
        console.log("Transaction receipt:", receipt);
      })
      .catch((error) => {
        console.error("Error leveling up Pokemon NFT:", error);
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


  const getPokemons = async() => {

    if (!pokemonContract) {
      setContractError("Contract not available");
      console.error("Contract not available");
      return [];
    }

    try {
      const ids = await pokemonContract.getPokemonsByTrainer();
  
      // Fetch details for each Pokémon and map them into structured objects
      const pokemons: PokemonNFT[] = await Promise.all(
        ids.map(async (id: string) => {
          const tokenURI = await pokemonContract.tokenURI(id);
          const metadataResponse = await fetch(tokenURI); // Fetch metadata from the token URI
          const jsonBody: PokemonNFT = await metadataResponse.json();

          // Map the data into your application's object structure
          return jsonBody;
        })
      );

      return pokemons;

    } catch (error: any) {
      console.error("Error getting pokemon object:", error);

      let errorDescription = null;

      if (error.data) {
        const customError: ErrorDescription | null = pokemonContract.interface.parseError(error.data);
        if (customError) {
          errorDescription = getErrorDescription(customError.name);
        }
      }

      setContractError(errorDescription || error.message);
      return [];
    }

  };


  return {
    createPokemonNFT,
    releasePokemonNFT,
    levelUpPokemon,
    changePokemonNickName,
    isLoadingPokemons,
    contractQueryError,
    pokemonNFTs,
    contractError,
    isContractLoaded,
    setContractError
  }

}