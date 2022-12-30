import React, { useState } from 'react';
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
      <Container className={`"container" ${s.container}`}>
        <h2 className={s.title}>{data}</h2>
        <button className={s.button} onClick={closeBanner}>
          <Close className={s.close} />
        </button>
      </Container>
    </div>
  );
};
