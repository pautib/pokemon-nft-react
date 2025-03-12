import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import { Tooltip } from "react-tooltip";
import { IV_MIN_VALUE, IV_MAX_VALUE } from "../helpers/getStatsCalculation";

export const IVInputNumber = ({ id, labelContent, value, onChangeFunction }) => {

    const tooltipId = 'tooltip_' + id;
    const tooltipMaxValue = "Maximum value is " + IV_MAX_VALUE;
    const tooltipMinValue = "Minimum value is " + IV_MIN_VALUE;
    const tooltipDescription = useRef("");

    useEffect(() => {

        let newDescription = "";

        if (value === IV_MAX_VALUE) {
            newDescription = tooltipMaxValue;
        }

        if (value === IV_MIN_VALUE) {
            newDescription = tooltipMinValue;
        }

        tooltipDescription.current = newDescription;
    }, [value]);


    return (
        <div data-mdb-input-init className="d-flex">
            <label className="form-label" htmlFor={ id } style={{ padding: "5px" }}>{ labelContent }</label>
            <Tooltip id={ tooltipId } />
            <input
                min={ IV_MIN_VALUE }
                max={ IV_MAX_VALUE}
                value={ value }
                placeholder={ IV_MIN_VALUE + " to " + IV_MAX_VALUE }
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