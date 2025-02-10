import React, { PropsWithChildren, useEffect, useState } from 'react';
import { BrowserProvider, Contract, JsonRpcSigner, InterfaceAbi } from "ethers";
import { SmartContractProviderContext } from '../config'
import { SmartContractContext, INIT_ERROR_MSG } from './SmartContractContext';
import { useWalletProvider } from '../hooks';
import { fetchWithTimeout } from '../utils';


// Create the provider component
export const SmartContractProvider: React.FC<PropsWithChildren<{contractAddress: string, contractAbi: InterfaceAbi}>> = ( { children, contractAddress, contractAbi } ) => {

    const TIMEOUT_MILLIS = 4000; //4 seconds

    const { selectedWallet } = useWalletProvider();
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const [contractError, setContractError] = useState<string | null>(INIT_ERROR_MSG);
    const [isContractLoaded, setIsContractLoaded] = useState(false);

    const clearError = () => setContractError("")

    const clearContractStates = () =>  {
        setContract(null);
        setSigner(null);
        setContractError(INIT_ERROR_MSG);
        setIsContractLoaded(false);
    }

    const checkContractDeployment = async (contract: Contract) => {
        console.log("Checking contract deployment...");
        try {
            await fetchWithTimeout(TIMEOUT_MILLIS, contract.waitForDeployment());
            return {
                contract: contract,
                isDeployed: true,
            }
        } catch (error) {
            console.error(error);
            return {
                contract: contract,
                isDeployed: false,
            };
        }
    };

    useEffect(() => {

        clearContractStates();
        if (selectedWallet) {

            const ethersProvider = new BrowserProvider(selectedWallet.provider);
            ethersProvider.getSigner()
            .then((newSigner) => {
                setSigner(newSigner);
                return checkContractDeployment(new Contract(contractAddress, contractAbi, newSigner));
            }).then(({ contract , isDeployed }) => {
                if (isDeployed) {
                    console.log("Contract is deployed on the selected network.");
                    clearError();
                    setContract(contract);
                    setIsContractLoaded(true);
                } else {
                    setContract(null);
                    setContractError("Contract is not deployed on the selected network.");
                    setIsContractLoaded(false);
                    console.log("Contract is not deployed on the selected network.");
                    //throw new Error("Contract is not deployed on the selected network.");
                }
            })
            .catch((e) => {
                setContractError(e);
                setIsContractLoaded(false);
                console.error(e);
            });
        }

    }, [selectedWallet]);


    const contextValue: SmartContractProviderContext = {
        contract: contract,
        signer: signer,
        contractError: contractError,
        setContractError: setContractError,
        isContractLoaded: isContractLoaded
    }

    // Return the provider component with the context value
    return (
        <SmartContractContext.Provider value={ contextValue }>
            { children }
        </SmartContractContext.Provider>
    );
};
