import { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import ModalFlower from 'public/image/flower-modal.svg';
import FlowerCategory from 'public/image/flower-modal-tab.svg';
import needs from 'lib/needs.json';
import links from 'lib/links.json';
import * as s from './HelpModal.module.css';

export const HelpModal = ({
  isOpen,
  closeModal,
  estModalClose,
  estModalStatus,
}) => {
  const { t } = useTranslation('modal');
  const things = t('things').split(',');
  const link = t('facebookLinks');

  const facebookLinks = link.split('|').map(el => {
    const name = el.split(';')[0];
    const link = el.split(';')[1];

    return {
      name,
      link,
    };
  });

  useEffect(() => {
    const handleEscape = e => {
      if (e.code !== 'Escape') return;
      window.removeEventListener('keydown', handleEscape);
      estModalClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [estModalClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[31]"
        onClose={() => {
          closeModal();
          estModalClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-fontGrey/50  " />
        </Transition.Child>

        <div className={s.mainWrap}>
          <div className={s.modalWrap}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={s.dialogpanel}>
                <button
                  className="visually-hidden"
                  aria-label="hidden button"
                ></button>

                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    estModalClose();
                  }}
                  className={s.xButton}
                  aria-label="close modal"
                >
                  <XMarkIcon className={s.xIcon} />
                </button>

                <div className={s.infoWrap}>
                  <Dialog.Title as="h3" className={s.title}>
                    {estModalStatus ? 'Kallid Eestimaa elanikud!' : t('title')}
                  </Dialog.Title>

                  <p className={s.text}>
                    {estModalStatus
                      ? 'Kahjuks sõjapõgenikud Ukrainast jätkuvalt tulevad Eestisse ning nad vajavad teie abi ja tuge! Saate vaadata, mida inimesed vajavad, või pakkuda teie abi meie telegrammi kanalis.'
                      : t('first')}
                  </p>

                  <p className="mt-3">
                    {estModalStatus
                      ? 'Tavaliselt on need põhilised asjad:'
                      : t('third')}
                  </p>

                  <ul className={s.needsList}>
                    {estModalStatus
                      ? needs.map(item => (
                          <li key={item} className="mt-3 ">
                            {item}
                          </li>
                        ))
                      : things.map(item => (
                          <li key={item} className="mt-3 ">
                            {item}
                          </li>
                        ))}
                  </ul>

                  <ModalFlower className={s.flower} />
                </div>

                <div className={s.facebookLinks}>
                  <ul>
                    {estModalStatus
                      ? links.map(({ name, link }) => (
                          <li key={name} className={s.facebookItem}>
                            <a
                              className="underline"
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          </li>
                        ))
                      : facebookLinks.map(({ name, link }) => (
                          <li key={name} className={s.facebookItem}>
                            <a
                              className="underline"
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                  </ul>

                  <FlowerCategory className={s.flowerTab} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

HelpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  estModalClose: PropTypes.func.isRequired,
  estModalStatus: PropTypes.bool.isRequired,
};
