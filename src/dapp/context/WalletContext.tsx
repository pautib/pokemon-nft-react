import { createContext } from 'react'
import { WalletProviderContext } from "../config"

const init : WalletProviderContext = {
    wallets: {}, 
    selectedWallet: null,
    selectedAccount: null,
    errorMessage: null,
    clearError: () => {},
    connectWallet: () => { return Promise.resolve(); } ,
    disconnectWallet: () => {},
    switchChain: () => { return Promise.resolve(); },
}

export const WalletContext = createContext<WalletProviderContext>(init);

