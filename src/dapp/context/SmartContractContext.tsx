import { createContext } from 'react'
import { SmartContractProviderContext } from '../config';


export const INIT_ERROR_MSG = "Please connect your wallet";

const init : SmartContractProviderContext = {
    contract: null,
    signer: null,
    contractError: INIT_ERROR_MSG,
    setContractError: () => {},
    isContractLoaded: false
}

// Create the context
export const SmartContractContext = createContext<SmartContractProviderContext>(init);