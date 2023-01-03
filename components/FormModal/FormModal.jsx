import Link from 'next/link';
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Mail from '../../public/image/form/mail.svg';
import MailError from '../../public/image/form/mail-error.svg';
import Close from '../../public/image/form/close.svg';
import * as s from './FormModal.module.css';

export const FormModal = ({ show, error, closeModal }) => {
  const { t } = useTranslation('common');

  const closeOnEscapeKeyDown = useCallback(
    e => {
      if ((e.charCode || e.keyCode) === 27) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <div onClick={closeModal} className={`${show ? s.modalShow : s.modal}`}>
      <div onClick={e => e.stopPropagation()} className={s.wrapper}>
        <button
          className={s.button}
          onClick={closeModal}
          aria-label="modal close button"
          type="button"
        >
          <Close className={s.close} />
        </button>
        {error ? (
          <div className={s.innerWrapper}>
            <h3 className={s.title}>{t('formModalTitleError')}</h3>
            <p className={s.text}>{t('formModalTextError')}</p>
            <MailError className={s.mail} />
          </div>
        ) : (
          <div className={s.innerWrapper}>
            <h3 className={s.title}>{t('formModalTitle')}</h3>
            <p className={s.text}>
              {t('formModalText')}
              <Link href="https://t.me/eevolunteer" legacyBehavior>
                <a
                  href="https://t.me/eevolunteer"
                  aria-label="https://t.me/eevolunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={s.telegramLink}>{t('formModalLink')}</span>
                </a>
              </Link>
            </p>
            <Mail className={s.mail} />
          </div>
        )}
      </div>
    </div>
  );
};

FormModal.propTypes = {
  show: PropTypes.bool,
  error: PropTypes.bool,
  closeModal: PropTypes.func,
};
