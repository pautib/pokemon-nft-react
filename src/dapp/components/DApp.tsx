import "./DApp.css"
import { WalletList } from "./WalletList";
import { SelectedWallet } from "./SelectedWallet";
import { WalletError } from "./WalletError";

export const DApp = () => {

  return (
      <div className="DApp">
        <WalletList />
        <hr />
        <SelectedWallet />
        <WalletError />
      </div>
  )
}
