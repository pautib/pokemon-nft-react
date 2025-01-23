import PropTypes from "prop-types";
import { usePokemonSmartContract } from "../../dapp/hooks";
import { POKEMON_CONTRACT } from "../../dapp/config";
import { useForm } from "../../hooks/useForm.js";
import { capitalize } from "lodash";

export const PokemonNFTCreationForm = ({ pokemon, encodedImg }) => {

  const { pokemonNickname, onInputChange } = useForm({pokemonNickname: pokemon.name});
  const { createPokemonNFT, isContractLoaded } = usePokemonSmartContract(POKEMON_CONTRACT.address, POKEMON_CONTRACT.abi);


  const onChangeNicknameSubmit = (event) => {
    event.preventDefault();
    onInputChange(event);
  }


  return (
    <>
          { isContractLoaded ?

            <>

              <span>Select and image and a nickname to get your NFT: </span>
              <form className="d-inline">
                  <input className="form-control d-inline w-25 m-1" name="pokemonNickname" autoComplete="off" onChange={ onChangeNicknameSubmit } placeholder={ capitalize(pokemon.name) } />
                  <button className="btn m-1 pokeGoBackButton d-inline" onClick={ createPokemonNFT(pokemon, encodedImg, pokemonNickname) }>
                      Get NFT
                  </button>
              </form>

            </>
            : 
            <>
            </>
          }

    </>
    
  );
}

PokemonNFTCreationForm.propTypes = {
  pokemon: PropTypes.object,
  encodedImg: PropTypes.string
};
