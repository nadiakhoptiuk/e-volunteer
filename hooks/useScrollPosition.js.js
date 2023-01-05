import { useEffect, useLayoutEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  useLayoutEffect(() => {
    const stored = window.sessionStorage.getItem('scrollPosition');

    setScrollPosition(stored ? JSON.parse(stored) : 0);
  }, []);

  useLayoutEffect(() => {
    window.sessionStorage.setItem(
      'scrollPosition',
      JSON.stringify(scrollPosition),
    );
  }, [scrollPosition]);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
