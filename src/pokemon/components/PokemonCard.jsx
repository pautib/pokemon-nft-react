import { NavLink } from "react-router";
import PropTypes from 'prop-types';
import { BASE_URI } from "../routes";
import { DEFAULT_CARD_IMG } from "../helpers";


export const PokemonCard = ({
      id,
      name,
      height,
      weight,
      imgUrl
    }) => {

        const usedImg = imgUrl ? imgUrl : DEFAULT_CARD_IMG;

        return (
            <div className="col animate__animated animate__fadeIn">
                <div className="card mt-0 mx-0" style={{ display: 'flow',}} >
                    <div className="row no-gutters" >
                        <div className="col-5">
                            <img src={ usedImg } className="card-img" alt={ id } />
                        </div>

                        <div className="col-7">
                            <div className="card-body">
                                <h5 className="card-title">{ name.toUpperCase() }</h5>
                                <p className="card-text">
                                    <small className="text-muted"><b>Pokedex Id:</b> { id } </small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted"><b>Height:</b> { height * 10 } cm</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted"><b>Weight:</b> { weight / 10.0 } Kg</small>
                                </p>
                                <NavLink to={`${ BASE_URI }/pokemon/${ id }`}>
                                    <b className="pointer-events-none">More information</b>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

PokemonCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    imgUrl: PropTypes.string,
    onOpen: PropTypes.func
};