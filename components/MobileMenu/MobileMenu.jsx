import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { useLocalChange } from 'hooks/useLocalChange';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Logo, Search, LanguageToggle, ButtonLink } from '..';
import { useTranslation } from 'next-i18next';
import * as s from './MobileMenu.module.css';
import Flower from '@/public/image/flower-menu.svg';

export const MobileMenu = ({ slugs, onClick }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [router, handleLocaleChange] = useLocalChange();
  const { t } = useTranslation('common');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        <Bars3Icon className={s.bars} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={s.dialogPanel}>
                  <div className={s.headerWrap}>
                    <div className="container">
                      <div className={s.header}>
                        <Logo />

                        <div className={s.navbar}>
                          <LanguageToggle
                            handleLocaleChange={handleLocaleChange}
                            locale={router.locale}
                          />

                          <button type="button" onClick={toggleModal}>
                            <XMarkIcon className={s.xicon} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={s.contentWrap}>
                    <Search menu articles={slugs} />

                    <ul className={s.list}>
                      {slugs &&
                        slugs.map(({ route, title }) => (
                          <li key={title} className={s.item}>
                            <Link href={route} onClick={toggleModal}>
                              {title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <ButtonLink
                      button
                      className={s.buttonType}
                      onClick={onClick}
                    >
                      {t('help')}
                    </ButtonLink>
                    <Flower className={s.flower} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

MobileMenu.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.object),
};
