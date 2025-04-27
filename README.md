[![Health check](https://github.com/pautib/pokemon-nft-react/actions/workflows/health-check-ping.yaml/badge.svg)](https://github.com/pautib/pokemon-nft-react/actions/workflows/health-check-ping.yaml)

# 🚀 Pokemon NFT React 🚀

https://pautib.github.io/pokemon-nft-react

Welcome to **Pokémon NFT React!** 🎉 This project brings together the nostalgia of Pokémon with the cutting-edge world of **NFTs** (Non-Fungible Tokens), powered by **React**. Gotta catch 'em all, right? 😉

## 🚀 Features

- **Create Pokemon NFTs**: Use your wallet to mint unique Pokemon NFTs.
- **Pokemon Carousel**: Browse through a carousel of Pokémon sprites.
- **Wallet Integration**: Seamlessly connect and interact with your crypto wallet.

## 🌟 Overview

**Pokémon NFT React** allows users to explore and collect unique Pokémon represented as NFTs. Each Pokémon is a one-of-a-kind token on the blockchain, featuring exclusive attributes and traits.

This project is designed as a learning experience. It combines Web3 technologies with React to create an interactive and visually appealing application.

## 🎯 Key Features

- **Pokémon Explorer**: Dynamic list of Pokémon with detailed, unique attributes.  
- **Blockchain Integration**: Connect to a blockchain network to mint, transfer, or trade NFTs.  
- **Modern UI**: Sleek and responsive interface built with React and modern CSS.  
- **Efficient State Management**: Using tools like Redux or Context API (if applicable).

## 🛠️ Tech Stack

- **Frontend**:  
  - React (CRA or Vite)  
  - React Router (for navigation)  
  - Modern CSS frameworks like TailwindCSS or Material-UI  

- **Blockchain**:  
  - Solidity (smart contracts)   


## 🚀 Getting Started

1. **Clone the repository**:
```bash
    git clone https://github.com/your-username/pokemon-nft-dapp.git
    cd pokemon-nft-dapp
```

2. **Install dependencies**:
```bash
    npm install
```

3. **Start the development server**:
```bash
    npm run dev
```

##  📂 Project Structure

```plaintext
Pokemon-NFT-React/
├── public/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Main pages
│   ├── services/        # API or blockchain interactions
│   ├── styles/          # CSS or Tailwind files
│   ├── App.js           # Main React component
│   ├── index.js         # Entry point
├── package.json         # Dependencies
├── .env                 # Environment variables (git ignored)
```

##  🖼️ Screenshots

Add screenshots of the project in action to make it more engaging.

## 📚 Usage

1. **Connect your wallet**: Make sure you have a crypto wallet like MetaMask installed and connected.
2. **Create a Pokemon NFT**: Use the interface to mint your own Pokemon NFTs.
3. **View your NFTs**: Check out your newly minted Pokemon in the carousel.

## 🤖 Code Overview

### `PokemonNFTPopupBody.jsx`

This component handles the creation of Pokemon NFTs. It uses the `useWalletProvider` hook to interact with the user's wallet.

```jsx
import PropTypes from "prop-types";
import { PokemonCarousel } from './PokemonCarousel';
import { useWalletProvider } from '../../dapp';

export const PokemonNFTPopupBody = ({ sprites }) => {
  const { selectedWallet } = useWalletProvider();

  function createPokemonNFT() {
    selectedWallet.provider.request({
      method: "createPokemon",
      params: [
        {
          from: 'test',
          to: 'test',
          value: 'test',
          gasLimit: '0x5028',
          maxPriorityFeePerGas: '0x3b9aca00',
          maxFeePerGas: '0x2540be400',
        },
      ],
    }).then((txHash) => console.log(txHash))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Create your Pokemon NFT!</h1>
      <button onClick={createPokemonNFT}>Mint Pokemon</button>
      <PokemonCarousel sprites={sprites} />
    </div>
  );
};

PokemonNFTPopupBody.propTypes = {
  sprites: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.


2. Create a new branch: git checkout -b feature/new-feature.


3. Commit your changes: git commit -m 'Add new feature'.


4. Push to the branch: git push origin feature/new-feature.


5. Open a Pull Request 🚀.


## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.


### 🌟 Thank you for visiting this project! If you like it, don't forget to give it a star ⭐ on GitHub.
