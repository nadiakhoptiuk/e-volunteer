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

export const MobileMenu = ({ slugs }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [router, handleLocaleChange] = useLocalChange();
  const { t } = useTranslation('common');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  console.log(slugs);

  return (
    <>
      <button type="button" onClick={toggleModal}>
        <Bars3Icon className="h-7 w-7 text-slate-50 transition-all hover:text-yellow-200 focus:text-yellow-200" />
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
                  <div className=" bg-blue2 py-3">
                    <div className="container">
                      <div className="flex items-center justify-between">
                        <Logo />

                        <div className="flex items-center gap-10">
                          <LanguageToggle
                            handleLocaleChange={handleLocaleChange}
                            locale={router.locale}
                          />

                          <button type="button" onClick={toggleModal}>
                            <XMarkIcon className="h-7 w-7 text-slate-50 transition-all hover:text-slate-300 focus:text-slate-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative px-6 pt-9  sm:px-24">
                    <Search menu articles={slugs} />

                    <ul className="mt-11 mb-[38px] flex flex-col gap-5 sm:mb-[72px]">
                      {slugs &&
                        slugs.map(({ route, title }) => (
                          <li
                            key={title}
                            className="text-xl leading-[1.24] text-slate-600"
                          >
                            <Link href={route} onClick={toggleModal}>
                              {title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <ButtonLink
                      button
                      className="mx-auto w-[152px] bg-blueAccent !px-0 text-small text-white"
                    >
                      {t('help')}
                    </ButtonLink>
                    <Flower className="absolute bottom-[-128px] left-1/2 w-[286px] -translate-x-1/2  sm:bottom-[-199px] sm:h-[176px] sm:w-[478px]" />
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
