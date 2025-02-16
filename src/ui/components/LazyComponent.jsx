import { Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";


export const LazyComponent = ( { children, loadingNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // <HTMLDivElement | null> in typescript

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        //threshold: 0.1, 
        rootMargin: "50%" 
      }
    );

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div ref={ref} >
      {isVisible ? (
        <Suspense fallback={<p>Loading...</p>}>
          { children }
        </Suspense>
      ) : (
        <> { loadingNode} </>
      )}
    </div>
  );
};

LazyComponent.propTypes = {
    children: PropTypes.node,
    loadingNode: PropTypes.node,
};
