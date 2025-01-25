import { BaseContract, TransactionResponse } from 'ethers';
import { ContractInterface } from 'ethers';
import { Contract, Signer, Provider } from 'ethers';
export const POKEMON_CONTRACT = {
    deployedNetwork: 11155111,

    address: "0x0d36C08548B86d8B95C1A8bcB00Ba6960A6cBbe6",

    abi: [
        "function mintPokemon(uint16 _pokedex_id, string _nickname, string _img_encoded_sprite, string _ability1_name, string _ability2_name, uint16 _base_hp, uint16 _base_attack, uint16 _base_defense, uint16 _base_attack_sp, uint16 _base_defense_sp, uint16 _base_speed, uint16 _base_height, uint16 _base_weight)",
        "event NewPokemon(uint256 indexed _id, string _nickname, uint32 _personalityValue)"
    ]
};

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



export interface PokemonContract extends BaseContract {
  
    // Add custom methods for your PokemonContract
    mintPokemon: (pokedexId: number, nickname: string, imgEncodedSprite: string, ability1Name: string, ability2Name: string, baseHp: number, baseAttack: number, baseDefense: number, baseAttackSp: number, baseDefenseSp: number, baseSpeed: number, baseHeight: number, baseWeight: number) => Promise<TransactionResponse>;

}

