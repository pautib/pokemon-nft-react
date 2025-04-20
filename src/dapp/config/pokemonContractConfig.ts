import { ABI } from './abi.ts';

export const POKEMON_CONTRACT = {
    deployedNetwork: 11155111,

    address: "0x80932602D8675438935e77c2E7303d5856562eAD",

    abi: ABI
}
export interface Pokemon {
    pokedexId: number; // The pokedex id
    name: string;
    abilities: string[];
    baseHp: number;
    baseAtk: number;
    baseDef: number;
    baseSpAtk: number;
    baseSpDef: number;
    baseSpeed: number;
    height: number;
    weight: number;
}

export interface PokemonNFT extends Pokemon {
    tokenId: number;
    nickName: string;
    image: string;
    ability1: string;
    ability2: string;
    isShiny: boolean;
    level: number;
    nautreIndex: number;
    experience: number;
    ivHp: number;
    ivAtk: number;
    ivDef: number;
    ivSpAtk: number;
    ivSpDef: number;
    ivSpeed: number;
    evHp: number;
    evAtk: number;
    evDef: number;
    evSpAtk: number;
    evSpDef: number;
    evSpeed: number;
    exp: number;

}