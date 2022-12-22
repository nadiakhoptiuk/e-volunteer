import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { sendMessage } from '../../utils/telegramApi';
import { Schema } from '../../utils/schema';
import * as s from './Form.module.css';

const Form = () => {
  const schema = Schema();
  const { t } = useTranslation('common');
  const createNotification = () =>
    NotificationManager.success('Повідомлення відправлено');
  const createNotificationError = () =>
    NotificationManager.error('error in API');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    // --- TELEGRAM ---
    let text = `<b>Повідомлення з сайту!</b>\n`;
    text += `<b>Відправник: </b> ${data.name}\n`;
    text += `<b>Телефон: </b> ${data.phone}\n`;
    text += `<b>Пошта: </b> ${data.email}\n`;
    text += `<b>Повідомлення: </b> ${data.message}\n`;
    text += `<b>Форма отримана з:</b>\n`;
    text += `<a href="https://xxx.netlify.app/">https://xxx.netlify.app/</a>`;
    const res = sendMessage(text);
    res.then(res => {
      res?.data.ok ? createNotification() : createNotificationError();
    });
    reset();
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className={s.wrapper}>
          <h3 className={s.title}>{t('formTitle')}</h3>
          <p className={s.subTitle}>{t('formSubTitle')}</p>
          <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
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
                  className={errors.name === undefined ? s.input : s.inputRed}
                  {...register('phone')}
                  placeholder="+380"
                />
                <p className={s.errorMsg}>{errors.phone?.message}</p>
              </div>
              <div className={s.inputWrapper}>
                <input
                  className={errors.email === undefined ? s.input : s.inputRed}
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
                <p className={s.errorMsgTextarea}>{errors.message?.message}</p>
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
          <NotificationContainer />
        </div>
      </div>
    </section>
  );
};

export default Form;
