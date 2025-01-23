import { Contract, JsonRpcSigner } from "ethers";

export interface ContractProviderContext {
    contract: Contract | null, // A Contract instance.
    signer: JsonRpcSigner | null, // A Signer instance.
    contractError: string | null // An error message.
}
