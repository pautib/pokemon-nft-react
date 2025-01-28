import { Interface } from "ethers";

export const ABI =  new Interface ([
        {
            "type": "function",
            "name": "burnPokemon",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "changePokemonNickName",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_newName",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getPokemon",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct PokemonFactory.Pokemon",
                    "components": [
                        {
                            "name": "id",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nickname",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "img_encoded_sprite",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "ability1_name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "ability2_name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "pokedex_id",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "hp",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "attack",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "defense",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "attack_sp",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "defense_sp",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "speed",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "height",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "weight",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "exp",
                            "type": "uint32",
                            "internalType": "uint32"
                        },
                        {
                            "name": "personality_value",
                            "type": "uint32",
                            "internalType": "uint32"
                        },
                        {
                            "name": "encryption_constant",
                            "type": "uint32",
                            "internalType": "uint32"
                        },
                        {
                            "name": "iv_hp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "iv_attack",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "iv_defense",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "iv_attack_sp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "iv_defense_sp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "iv_speed",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_hp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_attack",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_defense",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_attack_sp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_defense_sp",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "ev_speed",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "nature_index",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "level",
                            "type": "uint8",
                            "internalType": "uint8"
                        },
                        {
                            "name": "is_shiny",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "moves",
                            "type": "string[4]",
                            "internalType": "string[4]"
                        },
                        {
                            "name": "held_item",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPokemonsByTrainer",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "levelUp",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_hp_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_atk_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_def_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_atk_sp_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_def_sp_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_speed_increase",
                    "type": "uint16",
                    "internalType": "uint16"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mintPokemon",
            "inputs": [
                {
                    "name": "_pokedex_id",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_nickname",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_img_encoded_sprite",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_ability1_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_ability2_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_base_hp",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_attack",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_defense",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_attack_sp",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_defense_sp",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_speed",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_height",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_base_weight",
                    "type": "uint16",
                    "internalType": "uint16"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "ownerOf",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "releasePokemon",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "_from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "_from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "_operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "_interfaceId",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "_pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "_from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "NewPokemon",
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "_nickname",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "_personalityValue",
                    "type": "uint32",
                    "indexed": false,
                    "internalType": "uint32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "PokemonApprovalNotAllowed",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "PokemonLimitExceeded",
            "inputs": [
                {
                    "name": "trainerAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "PokemonNotEnoughLevel",
            "inputs": [
                {
                    "name": "pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "currentLevel",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "requiredLevel",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ]
        },
        {
            "type": "error",
            "name": "PokemonOnlyOwnerAllowed",
            "inputs": [
                {
                    "name": "trainerAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "pokemonId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        }
]);
