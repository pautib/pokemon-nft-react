import { useEffect } from "react";
import { usePokemonSmartContract } from "../../dapp/hooks";
import { PokeballSpinner, PokemonNftCard } from "../components";


export const PurchasedNftsPage = () => {

    const { pokemonNFTs, isLoadingPokemons, contractQueryError, isContractLoaded} = usePokemonSmartContract();

    useEffect(() => console.log(pokemonNFTs), [pokemonNFTs]);

    return (
        <>

            { isLoadingPokemons && <PokeballSpinner /> }

            { isContractLoaded && contractQueryError &&
                <>
                    <div>
                        { contractQueryError }
                    </div>
                </>
            }

            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    !isLoadingPokemons &&
                    <div>
                        <br/>
                        <div className="alert alert-warning animate__animated animate__fadeIn" aria-label="nopokemon" style={{ display: pokemonNFTs.length === 0 ? '' : 'none'}}>
                            No pokemon purchased
                        </div>
                    </div>

                }
            </div>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                
                    !isLoadingPokemons &&
                    pokemonNFTs?.map(
                        (pokemon) => (
                            <PokemonNftCard key={ "nft_" + pokemon.tokenId } pokemon={ pokemon } />
                        )
                    )
                    
                }
            </div>
           
        </>
    )
}