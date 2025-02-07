import { WalletProvider, SmartContractProvider } from "./dapp/index.ts";
import {PokemonRoutes} from "./pokemon";
import { POKEMON_CONTRACT } from "./dapp/config/pokemonContractConfig.ts";

export const PokemonApp = () => {
    return (
        <WalletProvider>
            <SmartContractProvider contractAddress={ POKEMON_CONTRACT.address } contractAbi={ POKEMON_CONTRACT.abi } >
                <PokemonRoutes/>
            </SmartContractProvider>
        </WalletProvider>
    )
}