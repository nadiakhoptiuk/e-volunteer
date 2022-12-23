import React from 'react';
// import * as s from './Hero.module.css';
import { useTranslation } from 'next-i18next';

export const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="pt-20 pb-[294px] text-[#5483C9] sm:pb-[456px] md:pb-[354px] xl:pb-[420px]">
      <div className="container">
        <div className="mx-auto flex max-w-[280px] flex-col gap-8 sm:m-0 sm:max-w-[440px] md:max-w-[558px] md:gap-10 xl:ml-20">
          <h1 className="text-[40px] font-medium uppercase leading-[46px] md:text-[80px] md:leading-[64px]">
            E-VOLUNTEER
          </h1>
          <p className="max-w-[260px] text-xl leading-6 md:max-w-[497px] md:text-[40px] md:font-medium md:leading-[46px]">
            {t('hero')}
          </p>
        </div>
      </div>
    </section>
  );
};
