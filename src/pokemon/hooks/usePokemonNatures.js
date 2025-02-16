import { useState} from 'react';
import { getNaturesArrayValues } from '../helpers';
import { useQuery } from '@tanstack/react-query';

export const usePokemonNatures = (initialValue = []) => {

    const { isPending: isLoading, error, data: naturesArray } = useQuery({
        queryKey: ['pokemonNatures'],
        queryFn: () => getNaturesArrayValues()
    });

    const [selectedNature, setSelectedNature] = useState([1,1,1,1,1,1]);

    return {
        error,
        natures: naturesArray ?? initialValue,
        selectedNature: selectedNature,
        setSelectedNature: setSelectedNature,
        areNaturesLoading: isLoading,
    };
}