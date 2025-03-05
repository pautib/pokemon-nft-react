/* eslint-disable @tanstack/query/exhaustive-deps */
import { getFilteredPokemonInfo, getPokemonById } from "../helpers";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const usePokemon = (pokemonId) => {

    const { isPending: isLoading, error, data: fetchedPokemon } = useQuery({
        queryKey: ['pokemonDetails'],
        queryFn: () => getPokemonDetails(pokemonId),
        staleTime: 0,

    });

    const getPokemonDetails = async() => {
        return getPokemonById(pokemonId).then((poke) => getFilteredPokemonInfo(poke));
    }

    return {
        isLoading,
        error,
        id: fetchedPokemon?.id,
        type1: fetchedPokemon?.types.filter((thisType) => thisType.slot === 1)[0].type.name,
        type2: fetchedPokemon?.types.filter((thisType) => thisType.slot === 2)[0]?.type.name,
        name: fetchedPokemon?.name,
        height: fetchedPokemon?.height,
        weight: fetchedPokemon?.weight,
        abilities: fetchedPokemon?.abilities.sort((ab1, ab2) => ab1.slot - ab2.slot).map((ab) => ab.ability.name), // an array of ability names
        sprites: fetchedPokemon?.sprites, // flat object with sprite urls
        cries: fetchedPokemon?.cries, // flat object with cry audio urls
        baseHp: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'hp')[0].base_stat,
        baseAtk: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'attack')[0].base_stat,
        baseDef: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'defense')[0].base_stat,
        baseSpAtk: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'special-attack')[0].base_stat,
        baseSpDef: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'special-defense')[0].base_stat,
        baseSpeed: fetchedPokemon?.stats.filter((thisStat) => thisStat.stat.name === 'speed')[0].base_stat,
    };

}

export const useGetFetchPokemon = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData(['pokemonDetails']) ? queryClient.getQueryData(['pokemonDetails']) : {};
};