import { useForm } from "../../hooks/useForm.js";
import { useLocation, useNavigate } from "react-router";
import queryString from 'query-string';
import { PokemonCard, PokeballSpinner } from "../components";
import { usePokemonSearchList } from "../hooks";
import { LazyComponent } from "../../ui"


export const SearchPokemonPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { query = '' } = queryString.parse( location.search );
    const { searchText, onInputChange } = useForm({searchText: query});
    const { pokemons, isLoading } = usePokemonSearchList(query);

    const showError = query.length > 0 && pokemons?.length === 0;

    const onSearchSubmit = (event) => {
        event.preventDefault();
        onInputChange(event);

        if (event.target.value.length > 1 || event.target.value.length === 0) {
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

            { isLoading && <PokeballSpinner /> }


            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    !isLoading && pokemons?.map( pokemon => (<LazyComponent key={ pokemon.name + pokemon.id }> <PokemonCard key={ pokemon.id } {...pokemon } /> </LazyComponent>) )
                }
            </div>
        </>

    )
}