import { EIP1193Provider } from "../config"

export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
    return balance
}
  
 export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex)
    return chainIdNum
}
  
export const formatAddress = (addr: string) => {
    const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2)
    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`
}

export const doesProviderHasAddListener = (provider: EIP1193Provider) => typeof provider.addListener === "function";


export const doesProviderHasRemoveListener = (provider: EIP1193Provider) => typeof provider.removeListener === "function";

export const fetchWithTimeout = async(timeOutMillis: number, request: Promise<any>) => {
    const timeout = new Promise((_,reject) => setTimeout(() => reject(new Error(`Timeout of ${timeOutMillis} ms exceeded`)), timeOutMillis));
    return Promise.race([request, timeout]);
}