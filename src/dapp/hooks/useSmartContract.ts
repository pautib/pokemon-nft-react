import { useEffect, useState } from "react"
import { BrowserProvider, Contract, JsonRpcSigner, InterfaceAbi } from "ethers";
import { useWalletProvider } from "./useWalletProvider";

export const useSmartContract = (contractAddress: string, contractAbi: InterfaceAbi) => {
    const initErrorMessage = "Please connect your wallet";

    const { selectedWallet } = useWalletProvider();
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const [contractError, setContractError] = useState<string | null>(initErrorMessage);

    const clearError = () => setContractError("")

    const clearContractStates = () =>  {
        setContract(null);
        setSigner(null);
        setContractError(initErrorMessage);
    }

    const checkContractDeployment = async (contract: Contract) => {
        try {
            await contract.deployed();
            return true;
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {

        clearContractStates();

        if (selectedWallet) {

            const ethersProvider = new BrowserProvider(selectedWallet.provider);
            ethersProvider.getSigner()
            .then((newSigner) => {
                setSigner(newSigner);

                const theContract = new Contract(contractAddress, contractAbi, newSigner);
                setContract(theContract);
                return checkContractDeployment(theContract);

            }).then((isDeployed) => {
                if (isDeployed) {
                    clearError();
                } else {
                    setContract(null);
                    setContractError("Contract is not deployed on the selected network.");
                    //throw new Error("Contract is not deployed on the selected network.");
                }
            })
            .catch((e) => {
                setContractError(e);
                console.error(e);
            });
        }

    }, [selectedWallet]);

    return {
        contract,
        signer,
        contractError,
        setContractError
    };

}