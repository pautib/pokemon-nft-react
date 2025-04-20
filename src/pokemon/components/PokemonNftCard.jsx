import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_CARD_IMG } from "../helpers";
import ReactFlipCard from "reactjs-flip-card";
import { getStatsCalculation } from "../helpers";
import { usePokemonNatures } from "../hooks";
import { usePokemonSmartContract } from '../../dapp/hooks';


export const PokemonNftCard = ({
    pokemon,
}) => {

        const { natures, areNaturesLoading } = usePokemonNatures();
        const usedImg = DEFAULT_CARD_IMG;
        const [stats, setStats] = useState([]);
        const { releasePokemonNFT } = usePokemonSmartContract();

        useEffect(() => { 
            console.log("PokemonNftCard", pokemon);
            console.log("PokemonNftCard", stats);
        }, [pokemon, stats]);

        useEffect(() => {

            if (!pokemon) return;
            if (areNaturesLoading) return;

            let lvl = pokemon?.level;
            let ivArray = [pokemon?.ivHp, pokemon?.ivAtk, pokemon?.ivDef, pokemon?.ivSpAtk, pokemon?.ivSpDef, pokemon?.ivSpeed];
            let evArray = [pokemon?.evHp, pokemon?.evAtk, pokemon?.evDef, pokemon?.evSpAtk, pokemon?.evSpDef, pokemon?.evSpeed];
            let baseStats = [pokemon?.baseHp, pokemon?.baseAtk, pokemon?.baseDef, pokemon?.baseSpAtk, pokemon?.baseSpDef, pokemon?.baseSpeed];
            console.log("all natures", natures );
            console.log("nature", natures[pokemon.natureIndex][1].matrix, );
            setStats(
                getStatsCalculation(baseStats, ivArray, evArray, lvl, natures[pokemon.natureIndex][1].matrix, pokemon?.name)
            );
         }, [pokemon, areNaturesLoading, natures]);

        return (
            pokemon && 
            !areNaturesLoading &&
            <div className='nft-card-container'>
                <div className='nft-card m-0'>
                    <div className='row no-gutters'>
                        <ReactFlipCard 
                            frontComponent = {
                                <PokemonNftCardFront
                                    nftImg={ pokemon.image ? pokemon.image : usedImg } 
                                    level={ pokemon.level }
                                    pokemonName={ pokemon.name }
                                    height={ pokemon.height }
                                    weight={ pokemon.weight }
                                />
                            } 
                            backComponent = { 
                                <PokemonNftCardBack
                                    hp={ stats[0] }
                                    atk = { stats[1] }
                                    def = { stats[2] }
                                    atk_sp = { stats[3] }
                                    def_sp = { stats[4] }
                                    speed = { stats[5] }
                                />
                            }
                        />
                    </div>
                </div>
                <div className='nft-button-container' >
                    <button id="release-pokemon" className="btn m-1 pokeGoBackButton d-inline-flex" onClick={ () => releasePokemonNFT(pokemon.tokenId) }>
                        Release Pokemon
                    </button>
                </div>
            </div>

        )
}


const PokemonNftCardFront = ({ nftImg, level, pokemonName, height, weight }) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card-front" >
                <div className="row no-gutters" >
                    <div className="col-5">
                        <img src={ nftImg } className="card-img" alt={ pokemonName } />
                    </div>

                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{ pokemonName.toUpperCase() }</h5>
                            <p className="card-text">
                                <small className="text-muted"><b>Level: </b> { level } </small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted"><b>Height: </b> { height * 10 } cm</small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted"><b>Weight: </b> { weight / 10.0 } Kg</small>
                            </p>
  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PokemonNftCardBack = ({ hp, atk, def, atk_sp, def_sp, speed }) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card-back">
                <div className="row no-gutters" >
                    <div className="col-5">
                    </div>
                
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">Stats</h5>
                            <span className="d-flex gap-3">
                                <p className="card-text">
                                    <small className="text-muted"><b>Hp: </b>{ hp }</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted"><b>Speed: </b>{ speed }</small>
                                </p>
                            </span>
                            <span className="d-flex gap-3">
                                <p className="card-text">
                                    <small className="text-muted"><b>Atk: </b>{ atk }</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted"><b>Atk Sp: </b>{ atk_sp }</small>
                                </p>
                            </span>
                            <span className="d-flex gap-3">
                                <p className="card-text">
                                    <small className="text-muted"><b>Def: </b>{ def }</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted"><b>Def Sp: </b>{ def_sp }</small>
                                </p>
                            </span>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PokemonNftCard.propTypes = {
    pokemon: PropTypes.shape({
        pokedexId: PropTypes.number,
        tokenId: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        level: PropTypes.number,
        natureIndex: PropTypes.number,
        height: PropTypes.number,
        weight: PropTypes.number,
        baseHp: PropTypes.number,
        baseAtk: PropTypes.number,
        baseDef: PropTypes.number,
        baseSpAtk: PropTypes.number,
        baseSpDef: PropTypes.number,
        baseSpeed: PropTypes.number,
        ivHp: PropTypes.number,
        ivAtk: PropTypes.number,
        ivDef: PropTypes.number,
        ivSpAtk: PropTypes.number,
        ivSpDef: PropTypes.number,
        ivSpeed: PropTypes.number,
        evHp: PropTypes.number,
        evAtk: PropTypes.number,
        evDef: PropTypes.number,
        evSpAtk: PropTypes.number,
        evSpDef: PropTypes.number,
        evSpeed: PropTypes.number,

    })
};


PokemonNftCardFront.propTypes = {
    key: PropTypes.number,
    pokemonName: PropTypes.string,
    nftImg: PropTypes.string,
    level: PropTypes.number,
    height: PropTypes.number,
    weight: PropTypes.number,

};

PokemonNftCardBack.propTypes = {
    hp: PropTypes.number,
    atk: PropTypes.number,
    def: PropTypes.number,
    atk_sp: PropTypes.number,
    def_sp: PropTypes.number,
    speed: PropTypes.number
};