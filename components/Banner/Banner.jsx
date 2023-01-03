import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '..';
import Close from '../../public/image/form/close.svg';
import * as s from './Banner.module.css';

export const Banner = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);
  function closeBanner() {
    setIsOpen(false);
  }
  return (
    <div className={isOpen ? 'bg-blueLight' : 'visually-hidden'}>
      <Container className={s.container}>
        <h2 className={s.title}>{data}</h2>
        <button
          className={s.button}
          onClick={closeBanner}
          name="close button"
          aria-label="close button"
        >
          <Close className={s.close} />
        </button>
      </Container>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.string,
};
