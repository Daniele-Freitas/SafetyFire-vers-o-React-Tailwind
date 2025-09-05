import { useEffect, useRef, useState } from 'react';

function useScrollAnimation(options = {}, animationBaseClass = '') {
  const elementRef = useRef(null); 
  const [hasAnimated, setHasAnimated] = useState(false); 
  const [isIntersecting, setIsIntersecting] = useState(false); 

  const { threshold = 0.1, root = null, rootMargin = '0px' } = options;

  useEffect(() => {
    const currentElement = elementRef.current; 

    if (!currentElement || hasAnimated) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      currentElement.classList.add('visible');
      setHasAnimated(true);
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            if (!hasAnimated) {
              entry.target.classList.add('visible');
              setHasAnimated(true);
            }
            setIsIntersecting(true); 
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, hasAnimated]); // Dependências: hasAnimated para que o useEffect re-execute se a animação for resetada

  return { ref: elementRef, isIntersecting };
}

export default useScrollAnimation;