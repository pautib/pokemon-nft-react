import { Contract, JsonRpcSigner } from "ethers";

export interface SmartContractProviderContext {
    contract: Contract | null, // A Contract instance.
    signer: JsonRpcSigner | null, // A Signer instance.
    contractError: string | null, // An error message.
    setContractError: React.Dispatch<React.SetStateAction<string | null>>,
    isContractLoaded: boolean
}

type ErrorDescriptions = {
    [key: string]: string;
};

const errorDescriptions: ErrorDescriptions = {
    "PokemonNotEnoughLevel": "The Pokemon's level is not high enough.",
    "PokemonNotEnoughFee": "The fee provided is not sufficient.",
    "PokemonLimitExceeded": "Each account can only have up to 6 pokemon."
};

// Example usage
export function getErrorDescription(errorName: string): string {
    return errorDescriptions[errorName];
}