import "./DApp.css"
import { useWalletProvider } from '../hooks'
import { EIP6963ProviderDetail } from "../config";

export const WalletList = () => {
  
  const { wallets, connectWallet } = useWalletProvider();

  return (
    <>
      <div className="providers">
        {
          Object.keys(wallets).length > 0 ? Object.values(wallets).map((provider: EIP6963ProviderDetail) => (
            <button key={provider.info.uuid} onClick={() => connectWallet(provider.info.rdns)} >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          )) :
            <div>
              No Announced Wallet Providers
            </div>
        }
      </div>
    </>
  )
}
