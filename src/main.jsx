import ReactDOM from 'react-dom/client'
import './styles.css'
import {PokemonApp} from './PokemonApp.jsx';
import {BrowserRouter} from 'react-router';
// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter>
      <PokemonApp />
    </BrowserRouter>
  //</StrictMode>,
)
