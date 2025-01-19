declare global {
    interface WindowEventMap {
      "eip6963:announceProvider": CustomEvent
      "chainChanged": CustomEvent
    }
}

/**
 * @title EIP6963EventNames
 * @dev Enum defining EIP-6963 event names.
 */
export enum EIP6963EventNames {
    Announce = "eip6963:announceProvider",
    Request = "eip6963:requestProvider",
}

/**
 * @title SupportedChainId
 * @dev Enum defining supported chain IDs.
 */
export enum SupportedChainId {
    //MAIN_NET = 1,
    SEPOLIA = 11155111,
    NAHMII3_TESTNET = 4062,
}

/**
 * @title LOCAL_STORAGE_KEYS
 * @dev Object containing local storage keys used in the dApp SELECTED_WALLET_RDNS is the key under which the rdns of the previously connected provider is stored.
 * @
 */
export const LOCAL_STORAGE_KEYS = {
    SELECTED_WALLET_RDNS: "selectedWalletRdns",
    SELECTED_ACCOUNT_BY_WALLET_RDNS: "selectedAccountByWalletRdns",
};

/**
 * @title networkInfoMap
 * @dev Object containing network information for supported chains.
 */
export const networkInfoMap = {
    [SupportedChainId.SEPOLIA]: {
        chainId: `0x${SupportedChainId.SEPOLIA.toString(16)}`,
        chainName: "Sepolia test network",
        rpcUrls: ["https://sepolia.infura.io/v3/"],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
    [SupportedChainId.NAHMII3_TESTNET]: {
        chainId: `0x${SupportedChainId.NAHMII3_TESTNET.toString(16)}`,
        chainName: "Nahmii3 Test Network",
        rpcUrls: ["https://rpc.testnet.nahmii.io/"],
        blockExplorerUrls: ["https://explorer.testnet.nahmii.io/"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
};

/**
 * @title isPreviouslyConnectedProvider
 * @dev Function to check if a provider was previously connected by comparing its rdns to the rdns previously store in the local storage the last time a connection was made.
 * @param providerRDNS The provider RDNS string.
 * @returns True if the providerRDNS matches the rdns found in the local storage.
 */
export function isPreviouslyConnectedProvider(providerRDNS: string): boolean {
    return (
        localStorage.getItem(
            LOCAL_STORAGE_KEYS.SELECTED_WALLET_RDNS
        ) === providerRDNS
    );
}

/**
 * @title isSupportedChain
 * @dev Function to check if a chain is supported.
 * @param chainId The chain ID to check.
 * @returns True if the chain ID is supported, false otherwise.
 */
export function isSupportedChain(chainId: number | null | undefined): chainId is SupportedChainId {
    if (!chainId) return false;
    return !!SupportedChainId[chainId];
}

export const POKEMON_CONTRACT = {
    
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi: [
        "function mintPokemon(uint16 _pokedex_id, string _nickname, string _img_encoded_sprite, string _ability1_name, string _ability2_name, uint16 _base_hp, uint16 _base_attack, uint16 _base_defense, uint16 _base_attack_sp, uint16 _base_defense_sp, uint16 _base_speed, uint16 _base_height, uint16 _base_weight)"
    ]
};


/* 

[ 
        "constructor(string symbol, string name)",
        "function transferFrom(address from, address to, uint value)",
        "function balanceOf(address owner) view returns (uint balance)",
        "event Transfer(address indexed from, address indexed to, address value)",
        "error InsufficientBalance(account owner, uint balance)",
        "function addPerson(tuple(string name, uint16 age) person)",
        "function addPeople(tuple(string name, uint16 age)[] person)",
        "function getPerson(uint id) view returns (tuple(string name, uint16 age))",
      
        "event PersonAdded(uint indexed id, tuple(string name, uint16 age) person)"
    ]
*/