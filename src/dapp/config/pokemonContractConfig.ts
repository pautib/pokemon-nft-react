import { ABI } from './abi.ts';

export const POKEMON_CONTRACT = {
    deployedNetwork: 11155111,

    address: "0x0d36C08548B86d8B95C1A8bcB00Ba6960A6cBbe6",

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