import {Navigate, Route, Routes} from "react-router";
import {SearchPokemonPage, PokemonPage} from "../pages";
import {Navbar} from "../../ui";
import {DApp} from "../../dapp/components/DApp";

export const PokemonRoutes = () => {

    return (
        <>
            <Navbar baseUri={BASE_URI}/>

            <div className="container">
                <Routes>
                    <Route path = {BASE_URI + "/"} element={ <Navigate to="search" /> } />
                    <Route path = {BASE_URI + "/search" } element={ <SearchPokemonPage /> } />
                    <Route path = {BASE_URI + "/pokemon/:pokemonId"} element={ <PokemonPage /> } />
                    <Route path = {BASE_URI + "/wallet-test"} element={ <DApp /> } />
                </Routes>
            </div>
        </>
    )
}


export const BASE_URI = "/pokemon-nft-react";