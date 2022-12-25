import React from 'react';
import * as s from './Hero.module.css';

export const Hero = ({ hero }) => {
  const { title, text } = hero;
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.text}>{text}</p>
        </div>
      </div>
    </section>
  );
};
