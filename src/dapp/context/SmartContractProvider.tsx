import React, { PropsWithChildren, useEffect, useState } from 'react';
import { BrowserProvider, Contract, JsonRpcSigner, InterfaceAbi } from "ethers";
import { SmartContractProviderContext } from '../config'
import { SmartContractContext, INIT_ERROR_MSG } from './SmartContractContext';
import { useWalletProvider } from '../hooks';


// Create the provider component
export const SmartContractProvider: React.FC<PropsWithChildren<{contractAddress: string, contractAbi: InterfaceAbi}>> = ( { children, contractAddress, contractAbi } ) => {

    const { selectedWallet } = useWalletProvider();
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const [contractError, setContractError] = useState<string | null>(INIT_ERROR_MSG);

    const clearError = () => setContractError("")

    const clearContractStates = () =>  {
        setContract(null);
        setSigner(null);
        setContractError(INIT_ERROR_MSG);
    }

    const checkContractDeployment = async (contract: Contract) => {
        console.log("Checking contract deployment...");
        try {
            await contract.waitForDeployment();
            return true;
        } catch (error) {
            console.log(error);
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
                    console.log("Contract is deployed on the selected network.");
                    clearError();
                } else {
                    setContract(null);
                    setContractError("Contract is not deployed on the selected network.");
                    console.log("Contract is not deployed on the selected network.");
                    //throw new Error("Contract is not deployed on the selected network.");
                }
            })
            .catch((e) => {
                setContractError(e);
                console.error(e);
            });
        }

    }, [selectedWallet]);


    const contextValue: SmartContractProviderContext = {
        contract: contract,
        signer: signer,
        contractError: contractError,
        setContractError: setContractError
    }

    // Return the provider component with the context value
    return (
        <SmartContractContext.Provider value={ contextValue }>
            { children }
        </SmartContractContext.Provider>
    );
};
