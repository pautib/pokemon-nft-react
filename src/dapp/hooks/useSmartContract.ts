import { useEffect, useState } from "react"
import { BrowserProvider, Contract, JsonRpcSigner, InterfaceAbi } from "ethers";
import { useWalletProvider } from "./useWalletProvider";

export const useSmartContract = (contractAddress: string, contractAbi: InterfaceAbi) => {
    //const [ethersProvider, setEthersProvider] = useState<BrowserProvider | null>(null);
    const { selectedWallet } = useWalletProvider();
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const [error, setError] = useState();

    useEffect(() => {

        if (selectedWallet) {

            const ethersProvider = new BrowserProvider(selectedWallet.provider);
            ethersProvider.getSigner().then((newSigner) => {
                //console.log(newSigner);
                setSigner(newSigner);
            })
            .catch((e) => setError(e))
            .then(() => {
                //console.log("Signer set");
                const theContract = new Contract(contractAddress, contractAbi, signer);
                setContract(theContract);
            } )
            .catch((e) => setError(e))
            .finally(() => {
                //console.log("I am the signer", signer);
                //console.log("Contract set");
                //console.log(contract);
                //console.log(contract?.getAddress());
                //console.log(contract?.getDeployedCode);
                //console.log(contract?.target);
                //console.log(contract?.interface);
                //console.log(contract?.runner);
            });

        }

        if (signer) {
            console.log("I am the real signer", signer);
        }

        if (contract) {
            console.log("I am the real contract", contract);
        }

    }, [selectedWallet]);

    return {
        contract,
        signer,
        error,
    };

}