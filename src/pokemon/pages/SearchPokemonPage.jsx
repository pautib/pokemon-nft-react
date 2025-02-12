import { useForm } from "../../hooks/useForm.js";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { PokemonCard, PokeballSpinner } from "../components";
import { useMemo } from "react";
import { usePokemonSearchList } from "../hooks";
import { LazyComponent } from "../../ui"

export const SearchPokemonPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { query = "" } = queryString.parse( location.search );
    const { searchText, onInputChange } = useForm({searchText: query});

    const pokemonList = usePokemonSearchList(query);
    const pokemons = useMemo(() => pokemonList, [pokemonList]);

    const showError = query.length > 0 && pokemons?.length === 0;

    const onSearchSubmit = (event) => {
        event.preventDefault();
        onInputChange(event);
        if (searchText.length > 1 || searchText.length === 0) {
            navigate(`?query=${ event.target.value.toLowerCase().trim() }`);
        }
    }

    return (
        <>

            <div className="row rows-cols-1 row-cols-md-3 g-3 mt-3" >
                <form className="col-4" style={{ display: 'flex'}}>
                    <input placeholder="Pikachu, Charmander, Mewtwo..." className="form-control" 
                        name="searchText" autoComplete="off" value={ searchText } onChange={onSearchSubmit} />
                </form>
            </div>
            <hr />
            <div className="row">

                <div className="col-7">
                    <br/>
                    <div className="alert alert-danger animate__animated animate__fadeIn" aria-label="nopokemon" style={{ display: showError ? '' : 'none'}}>
                        No pokemon with <b>{ query }</b>
                    </div>
                </div>

            </div>

            { !pokemons && (
                <PokeballSpinner />
            )}


            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    pokemons?.map( pokemon => (<LazyComponent key={ pokemon.name + pokemon.id }> <PokemonCard key={ pokemon.id } {...pokemon } /> </LazyComponent>) )
                }
            </div>
        </>


    )
}