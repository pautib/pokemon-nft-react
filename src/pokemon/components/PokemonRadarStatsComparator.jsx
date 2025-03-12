import { useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import { Slider } from '@mui/material';
import { getMaxStatValue, getStatsCalculation } from "../helpers/getStatsCalculation.js";
import { PokemonRadarChart } from "./PokemonRadarChart.jsx";
import { PokeNatureButtonGroup } from "./PokeNatureButtonGroup.jsx";
import {usePokemonNatures} from "../hooks/usePokemonNatures.js";
import {IVInputNumber} from "./IVInputNumber.jsx";
import {EVInputNumber} from "./EVInputNumber.jsx";


const lvlMarks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },
];

export const PokemonRadarStatsComparator = ({ baseStats, pokemonName }) => {

    const { natures, selectedNature, setSelectedNature } = usePokemonNatures([]);
    const [lvl, setLvl] = useState(50);
    const [ivArray, setIvArray] = useState([15,15,15,15,15,15]);
    const [evArray, setEvArray] = useState([0,0,0,0,0,0]);

    const [stats, setStats] = useState(getStatsCalculation(baseStats, ivArray, evArray, lvl, selectedNature, pokemonName));
    const maxStatValue = useRef(getMaxStatValue(baseStats));


    useEffect(() => {
        setStats(getStatsCalculation(baseStats, ivArray, evArray, lvl, selectedNature, pokemonName));

        if (stats.every(stat => stat < 20)) {
            maxStatValue.current = 20;

        } else {
            maxStatValue.current = getMaxStatValue(baseStats);
        }
    }, [lvl, ivArray, evArray, selectedNature]);

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-xs-4 col-sm-4 col-md-4 text-center align-self-center">
                    <h4 className="mt-2">Level</h4>
                    <Slider
                        value={ lvl }
                        onChange={ (event, val) => setLvl(val) }
                        valueLabelDisplay="auto"
                        min={1}
                        max={100}
                        aria-labelledby="input-lvl-number"
                        marks={lvlMarks}
                        color="primary"
                    />
                </div>

            </div>

            <div className="row">
                <h4 className="mt-2">IVs</h4>

                <div className="col-xs-2 col-sm-2 col-md-2" >
                    <IVInputNumber id="iv_hp" value={ ivArray[0] } labelContent={"HP: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[0] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <IVInputNumber id="iv_atk" value={ ivArray[1] } labelContent={"Atk: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[1] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <IVInputNumber id="iv_def" value={ ivArray[2] } labelContent={"Def: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[2] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <IVInputNumber id="iv_atksp" value={ ivArray[3] } labelContent={"AtkSp: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[3] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <IVInputNumber id="iv_defsp" value={ ivArray[4] } labelContent={"DefSp: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[4] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <IVInputNumber id="iv_speed" value={ ivArray[5] } labelContent={"Speed: "}
                       onChangeFunction={ (event) => {
                           const newIvs = [...ivArray];
                           newIvs[5] = event.target.valueAsNumber;
                           setIvArray(newIvs);
                       }}
                    />
                </div>
            </div>

            <div className="row">

                <h4 className="mt-2">EVs</h4>

                <div className="col-xs-2 col-sm-2 col-md-2" >
                    <EVInputNumber id="ev_hp" value={ evArray[0] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"Hp: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[0] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <EVInputNumber id="ev_atk" value={ evArray[1] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"Atk: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[1] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <EVInputNumber id="ev_def" value={ evArray[2] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"Def: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[2] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <EVInputNumber id="ev_atksp" value={ evArray[3] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"AtkSp: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[3] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <EVInputNumber id="ev_defsp" value={ evArray[4] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"DefSp: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[4] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2">
                    <EVInputNumber id="ev_speed" value={ evArray[5] }
                       addedMaxValue={ evArray[0] + evArray[1] + evArray[2] + evArray[3] + evArray[4] + evArray[5] }
                       labelContent={"Speed: "}
                       onChangeFunction={ (event) => {
                           const newEvs = [...evArray];
                           newEvs[5] = event.target.valueAsNumber;
                           setEvArray(newEvs);
                       }}
                    />
                </div>

            </div>

            <div className="row">

                <div className="col-xs-6 col-sm-6 col-md-6">
                    <h4 className="mt-2">Nature</h4>
                    <PokeNatureButtonGroup setMatrix={ setSelectedNature } naturesArray={ [...natures] }  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                    <PokemonRadarChart
                        baseStats={ baseStats }
                        maxStatValue= { maxStatValue.current }
                        stats={{
                            hp: stats[0],
                            atk: stats[1],
                            def: stats[2],
                            speed: stats[5],
                            defSp: stats[4],
                            atkSp: stats[3]
                        }}
                        showTitle={ false }
                        chartHeight={ 500 }
                    />
                </div>

            </div>

        </div>
    )
};


PokemonRadarStatsComparator.propTypes = {
    baseStats: PropTypes.array,
    pokemonName: PropTypes.string,
    natures: PropTypes.object,
};
