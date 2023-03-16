import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { sendMessage } from '../../utils/telegramApi';
import { Schema } from '../../utils/schema';
import { FormModal, ScreenLoader, Container } from '..';
import 'aos/dist/aos.css';
import * as s from './Form.module.css';

export const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const schema = Schema();
  const { t } = useTranslation('common');

  useEffect(() => {
    AOS.init();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    isLoading || isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isLoading, isOpen]);

  useEffect(() => {
    !isOpen &&
      setTimeout(() => {
        setError(false);
      }, 200);
  }, [isOpen]);

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      // --- TELEGRAM ---
      let text = `<b>Повідомлення з сайту!</b>\n`;
      text += `<b>Відправник: </b> ${data.name}\n`;
      text += `<b>Телефон: </b> ${data.phone}\n`;
      text += `<b>Пошта: </b> ${data.email}\n`;
      text += `<b>Повідомлення: </b> ${data.message}\n`;
      text += `<b>Форма отримана з:</b>\n`;
      text += `<a href="https://xxx.netlify.app/">https://xxx.netlify.app/</a>`;
      await sendMessage(text);
      openModal();
      reset();
    } catch (error) {
      console.log(error);
      setError(true);
      openModal();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <ScreenLoader>
          <p className={s.loading}>{t('loading')}</p>
        </ScreenLoader>
      )}
      <section className={s.section} data-aos="fade-up">
        <Container className={s.container}>
          <div className={s.wrapper}>
            <h3 className={s.title}>{t('formTitle')}</h3>
            <p className={s.subTitle}>{t('formSubTitle')}</p>

            <form
              method="POST"
              name="contact"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={s.wrapperInputs}>
                <div className={s.inputWrapper}>
                  <input
                    className={errors.name === undefined ? s.input : s.inputRed}
                    {...register('name')}
                    placeholder={t('placeholderName')}
                  />
                  <p className={s.errorMsg}>{errors.name?.message}</p>
                </div>

                <div className={s.inputWrapper}>
                  <input
                    className={
                      errors.phone === undefined ? s.input : s.inputRed
                    }
                    {...register('phone')}
                    placeholder="+380"
                  />
                  <p className={s.errorMsg}>{errors.phone?.message}</p>
                </div>

                <div className={s.inputWrapper}>
                  <input
                    className={
                      errors.email === undefined ? s.input : s.inputRed
                    }
                    {...register('email')}
                    placeholder="Email"
                  />
                  <p className={s.errorMsg}>{errors.email?.message}</p>
                </div>

                <div className={s.inputWrapper}>
                  <textarea
                    className={
                      errors.message === undefined ? s.textarea : s.textareaRed
                    }
                    {...register('message')}
                    placeholder={t('placeholderMessage')}
                  />
                  <p className={s.errorMsgTextarea}>
                    {errors.message?.message}
                  </p>
                </div>
              </div>

              <button
                aria-label={t('formButton')}
                className={s.button}
                type="submit"
              >
                {t('formButton')}
              </button>
            </form>
          </div>
        </Container>
        <FormModal closeModal={closeModal} show={isOpen} error={error} />
      </section>
    </>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func,
};
