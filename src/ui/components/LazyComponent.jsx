import { Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";


export const LazyComponent = ( { children, loadingNode, id }) => {
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
        rootMargin: "150%" 
      }
    );

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div ref={ref} id={id}>
      {isVisible ? (
        <Suspense fallback={<p>Loading...</p>}>
          { children }
        </Suspense>
      ) : (
        <> { loadingNode } </>
      )}
    </div>
  );
};

LazyComponent.propTypes = {
    children: PropTypes.node,
    loadingNode: PropTypes.node,
    id: PropTypes.number
};
