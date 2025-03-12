import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import { Tooltip } from "react-tooltip";

export const EVInputNumber = ({ id, labelContent, value, addedMaxValue, onChangeFunction }) => {

    const minValue = 0;
    const maxValue = 252;
    const maxSumEvValue = maxValue * 2 + 4;

    const tooltipId = 'tooltip_' + id;
    const tooltipMaxValue = "Maximum value is " + maxValue;
    const tooltipMinValue = "Minimum value is " + minValue;
    const tooltipDescription = useRef("");

    const tooltipExceededEVSum = `The sum of EVs values cannot exceed ${maxSumEvValue}`;

    useEffect(() => {

        let newDescription = "";

        if (value === maxValue) {
            newDescription = tooltipMaxValue;
        }

        if (value === minValue) {
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
                min={ minValue }
                max={ maxValue}
                value={ value }
                placeholder={ minValue + "to" + maxValue }
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