import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useScrollRestoration2 = () => { 

    const queryClient = useQueryClient();

    function setPosition() {
        queryClient.setQueryData('scrollPosition', window.scrollY);
        console.log("setPosition", window.scrollY);
    }

    useEffect(() => {
        const savedPosition = queryClient.getQueryData('scrollPosition');
        
        if (savedPosition) {
            console.log(savedPosition)
            window.scrollTo(0, savedPosition);
        }

        function handleBeforeUnload() {
            console.log("Before unload", window.scrollY);
            queryClient.setQueryData('scrollPosition', window.scrollY);
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            console.log("Cleanup");
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }

    }, [queryClient]);

    return {
        savedPosition: queryClient.getQueryData('scrollPosition'),
        setPosition
    }
}