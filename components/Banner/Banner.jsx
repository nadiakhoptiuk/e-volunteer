import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from '..';
import Close from '../../public/image/form/close.svg';
import * as s from './Banner.module.css';

export const Banner = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  useLayoutEffect(() => {
    setIsOpen(
      JSON.parse(
        typeof window !== 'undefined' &&
          (window.sessionStorage.getItem('open') ?? true),
      ),
    );
  }, []);

  function closeBanner() {
    typeof window !== 'undefined' &&
      window.sessionStorage.setItem('open', JSON.stringify(false));
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="bg-blueLight">
          <Container className={s.container}>
            <h2 className={s.title}>{data}</h2>
            <button
              className={s.button}
              onClick={closeBanner}
              aria-label="banner close button"
              type="button"
            >
              <Close className={s.close} />
            </button>
          </Container>
        </div>
      )}
    </>
  );
};

Banner.propTypes = {
  data: PropTypes.string,
};
