import { NavLink } from "react-router";
import { EMPTY_IMG } from "../helpers";


export const PokemonCardEmpty = () => {

    return (
        <div className="col">
            <div className="card mt-0 mx-0" style={{ display: 'flow',}} >
                <div className="row no-gutters" >
                    <div className="col-5">
                    <img src={ EMPTY_IMG } className="card-img" />
                    </div>

                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">?</h5>
                            <p className="card-text">
                                <small className="text-muted"><b>Pokedex Id:</b></small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted"><b>Height:</b></small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted"><b>Weight:</b></small>
                            </p>
                            <NavLink>
                                <b className="pointer-events-none">More information</b>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
