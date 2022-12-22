import React, { useState, useEffect } from 'react';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

export const LinkToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      {show && (
        <Link
          to="banner"
          smooth={true}
          hashSpy={true}
          className="fixed bottom-10 right-5 h-12 w-12 cursor-pointer rounded-full bg-yellow-200 shadow-xl transition duration-300 ease-in-out hover:bg-yellow-300 md:right-6"
          href=""
          aria-label="scroll to Top"
          aria-controls="scroll to Top"
        >
          <ArrowLongUpIcon className="absolute top-1/2 left-1/2 h-6 w-6 translate-y-[-50%] translate-x-[-50%] " />
        </Link>
      )}
    </>
  );
};
