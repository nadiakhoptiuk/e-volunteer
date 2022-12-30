import React, { useState, useEffect } from 'react';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';
import * as s from './LinkToTop.module.css';

export const LinkToTop = () => {
  const [show, setShow] = useState(false);
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  const scrollTop = () => scroll.scrollToTop({ smooth: true, hashSpy: true });

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
          onClick={scrollTop}
          className={s.link}
          aria-label="scroll to Top"
          aria-controls="scroll to Top"
        >
          <ArrowLongUpIcon className={s.icon} />
        </Link>
      )}
    </>
  );
};
