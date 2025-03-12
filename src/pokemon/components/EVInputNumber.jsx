import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import { Tooltip } from "react-tooltip";
import { EV_MIN_VALUE, EV_MAX_VALUE } from "../helpers/getStatsCalculation";

export const EVInputNumber = ({ id, labelContent, value, addedMaxValue, onChangeFunction }) => {

    const maxSumEvValue = EV_MAX_VALUE * 2 + 4;

    const tooltipId = 'tooltip_' + id;
    const tooltipMaxValue = "Maximum value is " + EV_MAX_VALUE;
    const tooltipMinValue = "Minimum value is " + EV_MIN_VALUE;
    const tooltipDescription = useRef("");

    const tooltipExceededEVSum = `The sum of EVs values cannot exceed ${maxSumEvValue}`;

    useEffect(() => {

        let newDescription = "";

        if (value === EV_MAX_VALUE) {
            newDescription = tooltipMaxValue;
        }

        if (value === EV_MIN_VALUE) {
            newDescription = tooltipMinValue;
        }

        if (addedMaxValue === maxSumEvValue) {
            newDescription = tooltipExceededEVSum;
        }

        tooltipDescription.current = newDescription;

    }, [value, addedMaxValue]);


    return (
        <div data-mdb-input-init className="d-flex">
            <label className="form-label" htmlFor={ id } style={{ padding: "5px" }}>{ labelContent }</label>
            <Tooltip id={ tooltipId } />
            <input
                min={ EV_MIN_VALUE }
                max={ EV_MAX_VALUE }
                value={ value }
                placeholder={ EV_MIN_VALUE + " to " + EV_MAX_VALUE }
                type="number"
                id={ id }
                data-tooltip-id={ tooltipId }
                data-tooltip-place="top"
                data-tooltip-content={ tooltipDescription.current }
                className="form-control"
                style={{ borderRadius: '10px !important', blockSize: '50%', maxWidth: '50%' }}
                onChange={ (event) =>  {
                    event.target.value = event.target.value || 0; // prevent NaN
                    if (event.target.value < value || addedMaxValue < maxSumEvValue) onChangeFunction(event);
                }
            }
            />
        </div>
    );
}

EVInputNumber.propTypes = {
    id: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    value: PropTypes.number,
    addedMaxValue: PropTypes.number,
    labelContent: PropTypes.string,
    onChangeFunction: PropTypes.func,
};