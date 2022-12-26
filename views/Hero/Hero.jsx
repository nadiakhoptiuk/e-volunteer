import React from 'react';
import { useTranslation } from 'next-i18next';
import * as s from './Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.title}>E-VOLUNTEER</h1>
          <p className={s.text}>{t('hero')}</p>
        </div>
      </div>
    </section>
  );
};
