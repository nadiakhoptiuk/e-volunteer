import Link from 'next/link';
import React, { useEffect, useCallback } from 'react';
import * as s from './FormModal.module.css';

export const FormModal = ({ show, closeModal, title = "Спасибо за ответ", text = "Дождитесь ответа", link = "В телеграм канале" }) => {
    const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
        closeModal();
    }
    }, [closeModal]);
    
    useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    }, [closeOnEscapeKeyDown]);

    return (
      <div onClick={closeModal} className={`${show ? s.modalShow : s.modal}`}>
        <div onClick={e => e.stopPropagation()} className='p-5 border rounded border-slate-500 w-56 bg-blue-300 '>
          <h3 className='font-bold text-xl'>{title}</h3>
          <p>{text}</p>
          <Link href="https://t.me/eevolunteer" legacyBehavior>
              <a
                href="https://t.me/eevolunteer"
                aria-label={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span className="mr-[19px] text-sm text-blue-500">
                  {link}
                </span>
              </a>
          </Link>
          <button onClick={closeModal} className='p-1 rounded border border-red-500'>Закрити модалку</button>
        </div>
        </div>
  );
};