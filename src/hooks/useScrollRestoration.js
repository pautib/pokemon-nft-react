import { useEffect, useRef, useCallback } from 'react';
import { useGetFetchPokemon } from '../pokemon/hooks';

const MAX_SCROLL_COUNTER = 20;
// Custom hook to track the scroll position of the SearchPokemonPage
export const useScrollRestoration = () => {

  const isScrollLoading = useRef(false);
  const hasUserScrolled = useRef(true);
  const scrollCounter = useRef(0);
  const { id: pickedPokemon } = useGetFetchPokemon();
  
  const scrollAndCheck = useCallback(() => {
    console.log("Picked pokemon", pickedPokemon)

    if (hasUserScrolled.current) {
      isScrollLoading.current = false;
      return;
    }

    if (!document.getElementById(pickedPokemon)) {
      return;
    }

    let initFocusPosition = document.getElementById(pickedPokemon).offsetTop;
    let newFocusPosition = window.scrollY;

    if ( (initFocusPosition >= newFocusPosition + window.innerHeight / 2) && scrollCounter.current < MAX_SCROLL_COUNTER) {
      scrollCounter.current = scrollCounter.current + 1;
      window.scrollTo({ top: initFocusPosition, behavior: 'smooth', block: 'center'});
      setTimeout(() => {
          scrollAndCheck();
      }, 1000);
    } else {
      isScrollLoading.current = false;
    }

  }, [hasUserScrolled, pickedPokemon, isScrollLoading]);


  useEffect(() => {
    console.log("Inside the useEffect")
    window.addEventListener('wheel', () => hasUserScrolled.current = true);

    if (pickedPokemon) {
      hasUserScrolled.current = false;
      isScrollLoading.current = true;
    }

    scrollAndCheck();

    return () => {
      console.log("Inside the return useEffect")
      window.removeEventListener('wheel', () => hasUserScrolled.current = true);
    } 

  }, [scrollAndCheck, pickedPokemon]);


  return {
    isScrollLoading: isScrollLoading.current,
  };

};