import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import { Tooltip } from "react-tooltip";

export const IVInputNumber = ({ id, labelContent, value, onChangeFunction }) => {

    const minValue = 0;
    const maxValue = 31;

    const tooltipId = 'tooltip_' + id;
    const tooltipMaxValue = "Maximum value is " + maxValue;
    const tooltipMinValue = "Minimum value is " + minValue;
    const tooltipDescription = useRef("");

    useEffect(() => {

        let newDescription = "";

        if (value === maxValue) {
            newDescription = tooltipMaxValue;
        }

        if (value === minValue) {
            newDescription = tooltipMinValue;
        }

        tooltipDescription.current = newDescription;
    }, [value]);


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
                onChange={ (event) => {
                    event.target.value = event.target.value || 0; // prevent NaN
                    onChangeFunction(event);
                } }
            />
        </div>
    );
}

IVInputNumber.propTypes = {
    id: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    value: PropTypes.number,
    labelContent: PropTypes.string,
    onChangeFunction: PropTypes.func,
};