import { WalletProvider, SmartContractProvider } from './dapp/index.ts';
import {PokemonRoutes} from './pokemon';
import { POKEMON_CONTRACT } from './dapp/config/pokemonContractConfig.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

 export const queryClient = new QueryClient();

export const PokemonApp = () => {
    return (
        <WalletProvider>
            <SmartContractProvider contractAddress={ POKEMON_CONTRACT.address } contractAbi={ POKEMON_CONTRACT.abi } >
                <QueryClientProvider client={queryClient}>
                    <PokemonRoutes/>
                </QueryClientProvider>
            </SmartContractProvider>
        </WalletProvider>
    )
}