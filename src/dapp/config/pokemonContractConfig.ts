export const POKEMON_CONTRACT = {
    deployedNetwork: 31337,
    
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",

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
