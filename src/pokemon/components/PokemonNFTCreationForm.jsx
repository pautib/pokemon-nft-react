import PropTypes from "prop-types";
import { usePokemonSmartContract } from "../../dapp/hooks";
import { POKEMON_CONTRACT } from "../../dapp/config";
import { capitalize } from "lodash";
import { useState } from "react";


export const PokemonNFTCreationForm = ({ pokemon, imgUrl }) => {

  const { createPokemonNFT, isContractLoaded } = usePokemonSmartContract(POKEMON_CONTRACT.address, POKEMON_CONTRACT.abi);
  const [ pokemonNickname, setPokemonNickname ] = useState(capitalize(pokemon.name));

  
  const onChangeNicknameSubmit = (event) => {
    event.preventDefault();
    setPokemonNickname(event.target.value);
  }

  return (
    <>
          { isContractLoaded  ?

            <>

              <span>Select and image and a nickname to get your NFT: </span>
                <div className="flex-container d-inline">
                  <input className="form-control w-25 m-1 d-inline-flex" 
                    id={ pokemon.name }
                    autoComplete="off"
                    onChange={ onChangeNicknameSubmit } 
                    placeholder={ capitalize(pokemon.name) } 
                    value={ pokemonNickname }
                  />
                  <button id="create-pokemon" className="btn m-1 pokeGoBackButton d-inline-flex" onClick={() => createPokemonNFT({...pokemon}, imgUrl, pokemonNickname.valueOf()) }>
                      Get NFT
                  </button>
                </div>
  
            </>
            : 
            <>
              <span>Connect to Sepolia Testnet to buy this Pokemon NFT</span>
            </>
          }

    </>
    
  );
}

PokemonNFTCreationForm.propTypes = {
  pokemon: PropTypes.object,
  imgUrl: PropTypes.string
};
