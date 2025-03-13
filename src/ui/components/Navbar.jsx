import {Link, NavLink} from 'react-router';
import {DApp} from "../../dapp/components/DApp";
import { PopupButton } from './PopupButton.jsx';
import { SelectedWallet, DisconnectWallet } from '../../dapp/index.ts';
import PropTypes from "prop-types";

export const Navbar = ({baseUri}) => {

    return (
        <nav className="navbar navbar-expand-sm" style={{backgroundColor: "#aa0d18"}}>

            <Link
                className="navbar-brand"
                to={baseUri}
            >
                <img 
                    src="./Pokemon.svg.png" 
                    alt="Pokemon" 
                    className="img-thumbnail" 
                    style={{backgroundColor: "#aa0d18", borderColor: "black" }}
                    title='Pokemon and Pokemon character names are trademarks of Nintendo'
                />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to={baseUri + "/search"}
                    >
                        Search
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to={baseUri + "/purchases"}
                    >
                        Purchases
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to={baseUri + "/objects"}
                    >
                        Objects
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link pokeNavSection"
                        to={baseUri + "/wallet-test"}
                    >
                        Wallet
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <PopupButton buttonTitle={"Available Wallets"} style= { { buttonClassName: 'pokeNavWalletButton', buttonId: 'wallet-popper'} } >
                            <DApp/>
                        </PopupButton>
                    </span>

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <SelectedWallet />
                    </span>

                    <span className="nav-item nav-link" style={{ fontWeight: 'bold', color: '#f2c304' }}>
                        <DisconnectWallet />
                    </span>

                </ul>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    baseUri: PropTypes.string,
};