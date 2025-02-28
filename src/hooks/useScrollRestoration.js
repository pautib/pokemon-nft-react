import { useEffect, useRef } from 'react';


const MAX_SCROLL_COUNTER = 20;
// Custom hook to track the scroll position of the SearchPokemonPage
export const useScrollRestoration = () => {

  const isScrollFinished = useRef(false);

  const setPickedPokemon = (pokemonId) => {
    sessionStorage.setItem('pickedPokemon',pokemonId)
  }

  useEffect(() => {

    const pickedPokemon = sessionStorage.getItem('pickedPokemon')

    let userScrolled = false;
    let counter = 0;
    
    window.addEventListener('wheel', () => {
      userScrolled = true;
    });


    function scrollAndCheck() {

        if (userScrolled) { 
          return; 
        }
        
        let initFocusPosition = document.getElementById(pickedPokemon).offsetTop;
        let newFocusPosition = window.scrollY;
        console.log(initFocusPosition, newFocusPosition, window.innerHeight, counter);
        
        if ( (initFocusPosition >= newFocusPosition + window.innerHeight/2) && counter < MAX_SCROLL_COUNTER) {
            
            window.scrollTo({ top: initFocusPosition, behavior: 'smooth', block: 'center'});
            //document.getElementById(pickedPokemon).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
            setTimeout(() => {
                counter++;
                scrollAndCheck(newFocusPosition);
            }, 1000);

        }

    }

    if (pickedPokemon && document.getElementById(pickedPokemon) && !isScrollFinished.current) {
      scrollAndCheck();
      isScrollFinished.current = true;
    }

    return () => window.removeEventListener('wheel', () => userScrolled = true )

  }, []);

  // Return the current scroll position
  return {
    pickedPokemon: sessionStorage.getItem('pickedPokemon'),
    setPickedPokemon,
    isScrollFinished,
  };

};