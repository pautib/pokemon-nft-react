import { ABI } from './abi.ts';

export const POKEMON_CONTRACT = {
    deployedNetwork: 11155111,

    address: "0x39827b7350EDC8c6509baC9cE2fc8Ab322A75095",

    abi: ABI
}
export interface Pokemon {
    id: number;
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