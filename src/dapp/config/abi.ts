import { Interface } from "ethers";

export const ABI = new Interface ([
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "",
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
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
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
        "name": "createRandomPokemon",
        "inputs": [
            {
                "name": "_pokedex_id",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_nickname",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_img_sprite_url",
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
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getApproved",
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
        "name": "getHpValue",
        "inputs": [
            {
                "name": "_base_hp",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_iv_hp",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_ev_hp",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "level",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "getNaturePokemonArray",
        "inputs": [
            {
                "name": "_nature_index",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint8[5]",
                "internalType": "uint8[5]"
            }
        ],
        "stateMutability": "view"
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
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "nickname",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "img_sprite_url",
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
                        "name": "base_hp",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "base_attack",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "base_defense",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "base_attack_sp",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "base_defense_sp",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "base_speed",
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
        "name": "getStatValue",
        "inputs": [
            {
                "name": "_base_stat",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_iv_stat",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_ev_stat",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "level",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_nature_multiplier",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "inputs": [
            {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_operator",
                "type": "address",
                "internalType": "address"
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
        "name": "levelUp",
        "inputs": [
            {
                "name": "_pokemonId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
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
                "name": "_name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_nickname",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_img_sprite_url",
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
        "name": "owner",
        "inputs": [],
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
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
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
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
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
        "name": "ERC721IncorrectOwner",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InsufficientApproval",
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
        "name": "ERC721InvalidApprover",
        "inputs": [
            {
                "name": "approver",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOperator",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidReceiver",
        "inputs": [
            {
                "name": "receiver",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidSender",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721NonexistentToken",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
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
        "name": "PokemonNotEnoughFee",
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
                "name": "requiredFee",
                "type": "uint256",
                "internalType": "uint256"
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
