import { useNavigate, useParams} from "react-router-dom";
import { capitalize } from "lodash";
import { PokemonCarousel, PokemonCryButton, PokemonStatsCalculator, PokemonStatsChart, PokeballSpinner, PokemonTypeImage, PokemonNFTPopupBody } from "../components";
import { PopupButton } from "../../ui/";
import { usePokemon } from "../hooks";
import { useMemo } from "react";


export const PokemonPage = () => {

    // eslint-disable-next-line no-unused-vars
    const { pokemonId, ...rest } = useParams();
    const {loading, ...mappedPokemon} = usePokemon(pokemonId);
    const pokemon = useMemo(() => mappedPokemon, [mappedPokemon]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        loading ? (
            <PokeballSpinner/>
        ) : (

        <div className="container-fluid">

            <div className="row mt-1">

                <PokemonCarousel imageJson={ pokemon.sprites } />

                <div className="col-xs-8 col-sm-8 col-md-8">
                    <h3>{ capitalize(pokemon.name) }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Id: </b> { pokemon.id } </li>
                        <li className="list-group-item"> <b>Name: </b> { capitalize(pokemon.name) } </li>
                        <li className="list-group-item"> <b>Height: </b> { pokemon.height * 10 } cm</li>
                        <li className="list-group-item"> <b>Weight: </b> { pokemon.weight / 10 } Kg</li>
                        <li className="list-group-item"> <b>Type: </b>
                            <PokemonTypeImage pokemonTypeName={ capitalize(pokemon.type1) } />
                            <PokemonTypeImage pokemonTypeName={ capitalize(pokemon.type2) } />
                        </li>
                        <li className="list-group-item"> <b>Abilities: </b> { pokemon.abilities.map(abilityNames => capitalize(abilityNames) + "").join(", ") }</li>
                        <li className="list-group-item">
                            <PokemonCryButton cryArray={ Object.values(pokemon.cries) } />
                            <PopupButton buttonTitle="Get NFT" style={ { buttonClassName: 'pokeNavWalletButton'} }>
                                <PokemonNFTPopupBody pokemon={ pokemon } />
                            </PopupButton>
                            <button className="btn m-2 pokeGoBackButton" onClick={ onNavigateBack }>
                                Go Back
                            </button>
                        </li>
                    </ul>
                    <br/>
                </div>

            </div>

            <div className="row mt-1">
                <h3>Base stats</h3>
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <PokemonStatsChart stats={
                        [pokemon.baseHp,
                        pokemon.baseAtk,
                        pokemon.baseDef,
                        pokemon.baseSpAtk,
                        pokemon.baseSpDef,
                        pokemon.baseSpeed] } >
                    </PokemonStatsChart>
                </div>
            </div>

            <div className="row mt-1">
                <h3>Stats Calculator</h3>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <PokemonStatsCalculator baseStats = {
                        [pokemon.baseHp,
                        pokemon.baseAtk,
                        pokemon.baseDef,
                        pokemon.baseSpAtk,
                        pokemon.baseSpDef,
                        pokemon.baseSpeed] }
                        name={pokemon.name}
                    >
                    </PokemonStatsCalculator>
                </div>
            </div>

        </div>
        )

    )
}