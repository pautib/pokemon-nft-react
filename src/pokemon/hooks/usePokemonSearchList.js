import { getPokemonListDetails } from '../helpers';
import { useQuery } from '@tanstack/react-query';


export const usePokemonSearchList = (query) => {
    
    const { isPending: isLoading, error: searchError, data: pokemons } = useQuery({
        queryKey: ['searchPokemonList'],
        queryFn: () => getPokemonListDetails(),
        staleTime: Infinity
    });

    return {
        pokemons: pokemons?.filter(pokemon => pokemon.name.includes(query)),
        isLoading,
        searchError
    }
}