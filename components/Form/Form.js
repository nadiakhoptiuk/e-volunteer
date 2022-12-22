import { yupResolver } from '@hookform/resolvers/yup';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
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
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // const { t } = useTranslation();
  // const { success } = t('formValidation', {
  //   returnObjects: true,
  // });
  // const {
  //   title,
  //   subTitle,
  //   nameInput,
  //   emailInput,
  //   messageInput,
  //   submit,
  //   phonePlaceholder,
  // } = t('form', {
  //   returnObjects: true,
  // });

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
      const res = sendMessage(text);
      res.then(res => {
        res?.data.ok ? createNotification() : createNotificationError();
      });
      reset();
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Остались вопросы?</h3>
      <p className={s.subTitle}>Напишите нам</p>
      <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
        <div className={s.wrapperInputs}>
          <div className={s.inputWrapper}>
            <input
              className={errors.name === undefined ? s.input : s.inputRed}
              {...register('name')}
              placeholder="Имя"
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
              placeholder="Написать нам"
            />
            <p className={s.errorMsgTextarea}>{errors.message?.message}</p>
          </div>
        </div>

        <button aria-label="Отправить" className={s.button} type="submit">
          Отправить
        </button>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default Form;
