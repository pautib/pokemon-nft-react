import { useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { Slider } from '@mui/material';
import { getStatsCalculation } from "../helpers";
import { PokemonStatsChart } from "./PokemonStatsChart.jsx";
import { PokeNatureButtonGroup } from "./PokeNatureButtonGroup.jsx";
import {usePokemonNatures} from "../hooks";
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

export const PokemonStatsCalculator = ({ baseStats, pokemonName }) => {

    const { natures, selectedNature, setSelectedNature } = usePokemonNatures([]);
    const [lvl, setLvl] = useState(50);
    const [ivArray, setIvArray] = useState([15,15,15,15,15,15]);
    const [evArray, setEvArray] = useState([0,0,0,0,0,0]);

    const [stats, setStats] = useState(getStatsCalculation(baseStats, ivArray, evArray, lvl, selectedNature, pokemonName));


    useEffect(() => {
        setStats(getStatsCalculation(baseStats, ivArray, evArray, lvl, selectedNature, pokemonName));
    }, [lvl, ivArray, evArray, selectedNature]);

    return (

        <div className="container-fluid">

            <div className="row">
                <h4 className="mt-2">Level</h4>
                <div className="col-xs-3 col-sm-3 col-md-3">
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
                <h4 className="mt-2">Nature</h4>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <PokeNatureButtonGroup setMatrix={ setSelectedNature } naturesArray={ [...natures] }  />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8">
                    <PokemonStatsChart stats={ stats } ></PokemonStatsChart>
                </div>
            </div>

        </div>
    )
};


PokemonStatsCalculator.propTypes = {
    baseStats: PropTypes.array,
    pokemonName: PropTypes.string,
    natures: PropTypes.object,
};
