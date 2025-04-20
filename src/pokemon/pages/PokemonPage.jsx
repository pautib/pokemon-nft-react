import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { capitalize } from "lodash";
import { PokemonCarousel, PokemonCryButton, PokemonStatsComparator, PokemonRadarChart, PokeballSpinner, PokemonTypeImage, PokemonNFTCreationForm } from "../components";
import { usePokemon } from "../hooks";

export const PokemonPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { pokemonId, ...rest } = useParams();
    const { isLoading, ...pokemon } = usePokemon(pokemonId);
    const [ pickedImg, setPickedImg ] = useState(null);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        onSelectCarouselImg(0);
    }, [isLoading]);

    const onSelectCarouselImg = (selectedIndex) => {

        if (!isLoading) {
            if (Object.entries(pokemon.sprites).length === 0) {
                setPickedImg("./whos.png")
                return;
            }
   
            setPickedImg(Object.values(pokemon.sprites)[selectedIndex]);
        }
    };

    return (
        isLoading ? (
            <PokeballSpinner/>
        ) : (

        <div className="container-fluid ml-1">

            <div className="row mt-1">

                <PokemonCarousel imageJson={ pokemon.sprites } onSelectImg={ onSelectCarouselImg }/>

                <div className="col-xs-5 col-sm-5 col-md-5">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Id: </b> { pokemon.pokedexId } </li>
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
                            <button className="btn m-2 pokeGoBackButton" onClick={ onNavigateBack }>
                                Go Back
                            </button>
                        </li>
                        <li className="list-group-item">
                            <PokemonNFTCreationForm pokemon={ {...pokemon} } imgUrl={ pickedImg } />
                        </li>
                    </ul>
                    <br/>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4">
                    <PokemonRadarChart
                        stats={{
                            hp: pokemon.baseHp,
                            atk: pokemon.baseAtk,
                            def: pokemon.baseDef,
                            speed: pokemon.baseSpeed,
                            defSp: pokemon.baseSpDef,
                            atkSp: pokemon.baseSpAtk
                        }}
                        chartName={ "Base Stats" }
                        chartHeight={ 400 }
                    />
                </div>

            </div>

            <div className="row mt-1">
                <h3>Stats Comparator</h3>

                <div className="col-xs-12 col-sm-12 col-md-12">
                    <PokemonStatsComparator
                        baseStats = {
                            [pokemon.baseHp,
                            pokemon.baseAtk,
                            pokemon.baseDef,
                            pokemon.baseSpAtk,
                            pokemon.baseSpDef,
                            pokemon.baseSpeed]
                        }
                        name={pokemon.name}
                    />
                </div>
            </div>

        </div>
        )

    )
}