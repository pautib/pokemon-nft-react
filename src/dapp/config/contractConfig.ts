import { Contract, JsonRpcSigner } from "ethers";

export interface SmartContractProviderContext {
    contract: Contract | null, // A Contract instance.
    signer: JsonRpcSigner | null, // A Signer instance.
    contractError: string | null, // An error message.
    setContractError: React.Dispatch<React.SetStateAction<string | null>>,
    isContractLoaded: boolean
}
