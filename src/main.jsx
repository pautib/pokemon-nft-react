import ReactDOM from 'react-dom/client'
import './styles.css'
import { PokemonApp } from './PokemonApp.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react';


const router = createBrowserRouter([
  { path: "/", element: <PokemonApp /> },
  { path: "*", element: <PokemonApp /> },
], );


ReactDOM.createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <RouterProvider router={ router } >
      <PokemonApp />
    </RouterProvider >
  //</StrictMode>,
)
