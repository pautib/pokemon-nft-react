import { useEffect, useRef } from 'react';


const MAX_SCROLL_COUNTER = 50;
// Custom hook to track the scroll position of the SearchPokemonPage
export const useScrollRestoration = () => {

  const isScrollFinished = useRef(false);

  const setPickedPokemon = (pokemonId) => {
    sessionStorage.setItem('pickedPokemon',pokemonId)
  }

  useEffect(() => {

    const pickedPokemon = sessionStorage.getItem('pickedPokemon')
    let counter = 0;

    function scrollAndCheck() {
        
        let initFocusPosition = document.getElementById(pickedPokemon).offsetTop;
        let newFocusPosition = window.scrollY;
        console.log(initFocusPosition, newFocusPosition, window.innerHeight, counter);
        
        if ( (initFocusPosition >= newFocusPosition + window.innerHeight/2) && counter < MAX_SCROLL_COUNTER) {
            
            window.scrollTo({ top: initFocusPosition, behavior: 'smooth', block: 'center'});

            setTimeout(() => {
                counter++;
                scrollAndCheck(newFocusPosition);
            }, 500);

        }

    }

    if (pickedPokemon && document.getElementById(pickedPokemon) && !isScrollFinished.current) {
        scrollAndCheck();
    }

    isScrollFinished.current = true;

  }, []);

  // Return the current scroll position
  return {
    pickedPokemon: sessionStorage.getItem('pickedPokemon'),
    setPickedPokemon,
    isScrollFinished,
  };

};