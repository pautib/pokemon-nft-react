import {useEffect, useState} from "react";
import {capitalize} from "lodash";
import PropTypes from "prop-types";
import {useCarouselCounter} from "../hooks/useCarouselCounter.js";

export const PokemonCarousel = ({
    imageJson, 
    onSelectImg = () => {}
}) => {

    const [footerImgText, setFooterImgText] = useState('');
    const {counter: activeImgIndex, increment: setNextImg, decrement: setPrevImg }
        = useCarouselCounter(0,0, Object.values(imageJson).length - 1);

    useEffect(() => {
        if (Object.entries(imageJson).length > 0) {
            let footer = Object.entries(imageJson)?.at(activeImgIndex)[0];
            setFooterImgText(customizeFooterText(footer));
            onSelectImg(activeImgIndex);
        } else {
            setFooterImgText("?");
            onSelectImg(0);
        }
    }, [activeImgIndex]);

    function customizeFooterText(imgName) {
        return capitalize(imgName);
    }

    return (
        <div id="pokemonCarousel" className="carousel slide col-3" >
            <div className="flex-container" >
                <div className="carousel-inner">
                    {
                        Object.entries(imageJson)?.map( ([keyName, imgUrl], index ) => (
                            <div className={`carousel-item ${activeImgIndex === index ? "active" : ""}`}
                                 key={ keyName }
                                 id={ keyName } >
                                <img
                                    id={ `carousel-img ${keyName} ${activeImgIndex === index ? "active" : ""}`  }
                                    src={ imgUrl }
                                    className="img-thumbnail img-fluid animate__animated animate__fadeInLeft"
                                    style={{backgroundSize: "cover",  width: "100vw", maxWidth: "100%" }}
                                />
                            </div>
                        ))
                    } 
                    {
                        Object.entries(imageJson).length === 0 && 
                        (
                            <div className="carousel-item active">
                                <img
                                    id="carousel-img active"
                                    src="./whos.png"
                                    className="img-thumbnail img-fluid animate__animated animate__fadeInLeft"
                                    style={{backgroundSize: "cover",  width: "100vw", maxWidth: "100%" }}
                                />
                            </div>
                        )
                    }
                </div>

                <div className="input-group" style={{ justifyContent: "space-between", margin: "1%" }}>

                    <div type="button" data-bs-target="#pokemonCarousel" onClick={ setPrevImg } data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#f2c304", borderRadius: "20%" }}></span>
                        <span className="visually-hidden">Previous</span>
                    </div>

                    <div>{ footerImgText }</div>

                    <div type="button" data-bs-target="#pokemonCarousel" onClick={ setNextImg } data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#f2c304", borderRadius: "20%" }}></span>
                        <span className="visually-hidden">Next</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

PokemonCarousel.propTypes = {
    imageJson: PropTypes.object,
    onSelectImg: PropTypes.func
};