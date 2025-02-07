declare global {
    interface WindowEventMap {
      "eip6963:announceProvider": CustomEvent
      "chainChanged": CustomEvent
    }
}

/**
 * Represents the assets needed to display and identify a wallet.
 *
 * @interface EIP6963ProviderInfo
 * @property uuid - A locally unique identifier for the wallet. MUST be a v4 UUID.
 * @property name - The name of the wallet.
 * @property icon - The icon for the wallet. MUST be data URI.
 * @property rdns - The reverse syntax domain name identifier for the wallet.
 */
export interface EIP6963ProviderInfo {
    rdns: string
    uuid: string
    name: string
    icon: string
  }

/**
 * Represents the structure of an Ethereum provider based on the EIP-1193 standard
 * 
 * @interface EIP1193Provider
 */
export interface EIP1193Provider {
    chainId?: string
    isStatus?: boolean
    host?: string
    path?: string
    sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
    send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
    request(request: { method: string, params?: Array<any> | Record<string, any> }): Promise<any>
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
  }

/**
 * Combines the provider's metadata with an actual provider object.
 * Creating a complete picture of a wallet provider at a glance and for purposes of working with them.
 *
 * @interface EIP6963ProviderDetail
 * @property info - The EIP6963ProviderInfo object.
 * @property provider - The provider instance.
 */
export interface EIP6963ProviderDetail {
    info: EIP6963ProviderInfo
    provider: EIP1193Provider
  }
  
// This type represents the structure of an event dispatched by a wallet to announce its presence based on EIP-6963
export interface EIP6963ProviderEvent extends Event {
    detail:{
      info: EIP6963ProviderInfo
      provider: EIP1193Provider
    }
  }
  
  // An error object with optional properties, commonly encountered when handling MetaMask `eth_requestAccounts` errors
export interface WalletError {
    code?: string
    message?: string
  }

  // Context interface for the EIP-6963 provider.
export interface WalletProviderContext {
  wallets: Record<string, EIP6963ProviderDetail> // A list of wallets.
  selectedWallet: EIP6963ProviderDetail | null // The selected wallet.
  selectedAccount: string | null // The selected account address.
  errorMessage: string | null // An error message.
  connectWallet: (walletUuid: string) => Promise<void> // Function to connect wallets.
  disconnectWallet: () => void // Function to disconnect wallets.
  switchChain: (chainId: number) => Promise<void> // Function to switch chains.
  clearError: () => void
}


// Type alias for a record where the keys are wallet identifiers and the values are account
// addresses or null.
export type SelectedAccountByWallet = Record<string, string | null>


/// FINISHED Interfaces and Types for WalletProvider

/**
 * @title EIP6963EventNames
 * @dev Enum defining EIP-6963 event names.
 */
export enum EIP6963EventNames {
    Announce = "eip6963:announceProvider",
    Request = "eip6963:requestProvider",
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
 * @title SupportedChainId
 * @dev Enum defining supported chain IDs.
 */
export enum SupportedChainId {
    //MAIN_NET = 1,
    SEPOLIA = 11155111,
    NAHMII3_TESTNET = 4062,
}

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
 * @title isSupportedChain
 * @dev Function to check if a chain is supported.
 * @param chainId The chain ID to check.
 * @returns True if the chain ID is supported, false otherwise.
 */
export function isSupportedChain(chainId: number | null | undefined): chainId is SupportedChainId {
    if (!chainId) return false;
    return !!SupportedChainId[chainId];
}