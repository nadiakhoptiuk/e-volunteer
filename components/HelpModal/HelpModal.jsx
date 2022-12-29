import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

import ModalFlower from 'public/image/flower-modal.svg';
// import { FormEst } from '..';

const needs = [
  'riided',
  'kingad',
  'hügieenitooted',
  'koolitarbed',
  'mööbliesemed',
  'toit',
  'mänguasjad',
  'köögiriistad',
  'ja muud',
];

const links = [
  {
    name: 'Ukraina sõbrad Eestis',
    link: 'https://www.facebook.com/groups/ukrainasobradeestis/',
  },
  {
    name: 'Ukraina sõbrad Tartus',
    link: 'https://www.facebook.com/groups/ukrainatartu/',
  },
  {
    name: 'Ukraina sõbrad Valgamaal',
    link: 'https://www.facebook.com/groups/349236013807769',
  },
  {
    name: 'Ukraina sõbrad Rakvere',
    link: 'https://www.facebook.com/groups/1030599457805332/',
  },
  {
    name: 'Ukraina sõbrad Pärnumaal',
    link: 'https://www.facebook.com/groups/459680962603871/',
  },
  {
    name: 'Ukraina sõbrad Põlvas',
    link: 'https://www.facebook.com/groups/722992845544913/',
  },
  {
    name: 'Ukraina sõbrad Otepääl',
    link: 'https://www.facebook.com/groups/486733756427306/',
  },
  {
    name: 'Ukraina sõbrad Põhja-Sakalas',
    link: 'https://www.facebook.com/groups/345467937639681/',
  },
  {
    name: 'Ukraina sõbrad Lüganuse vallas',
    link: 'https://www.facebook.com/groups/557740032598915/',
  },
  {
    name: 'Ukraina sõbrad Viljandis',
    link: 'https://www.facebook.com/groups/1137779530369413/',
  },
  {
    name: 'Ukraina sõbrad Haljala vallas',
    link: 'https://www.facebook.com/groups/973500209971270/',
  },
  {
    name: 'Saue valla Ukraina sõbrad',
    link: 'https://www.facebook.com/groups/348110950421074/',
  },
  {
    name: 'Ukraina sõbrad Järvamaal',
    link: 'https://www.facebook.com/groups/650808172873112/',
  },
  {
    name: 'Abi pagulastele. Kohtla-Järvel, Johvis',
    link: 'https://www.facebook.com/groups/370848728250232/',
  },
];

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
    const name = el.split(',')[0];
    const link = el.split(',')[1];

    return {
      name,
      link,
    };
  });
  console.log(facebookLinks);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-button fixed inset-0 bg-opacity-70 blur-xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center bg-fontGrey/50 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative h-[858px] w-[1240px] transform overflow-hidden  rounded-[20px]  bg-slate-50 text-lg leading-[22px] transition-all xl:flex xl:px-[108px] xl:py-[80px]">
                <div className="relative  text-start  text-fontGrey  xl:mr-[121px] ">
                  <Dialog.Title
                    as="h3"
                    className=" text-[34px] font-medium leading-[39px] "
                  >
                    {estModalStatus ? 'Kallid Eestimaa elanikud!' : t('title')}
                  </Dialog.Title>
                  <p className="mt-8 w-[506px]">
                    {estModalStatus
                      ? 'Kahjuks sõjapõgenikud Ukrainast jätkuvalt tulevad Eestisse ning nad vajavad teie abi ja tuge! Saate vaadata, mida inimesed vajavad, või pakkuda teie abi meie telegrammi kanalis.'
                      : t('first')}
                  </p>
                  <p className="mt-3">
                    {estModalStatus
                      ? 'Tavaliselt on need põhilised asjad:'
                      : t('third')}
                  </p>
                  <ul className=" list-inside list-disc text-start text-slate-600">
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
                  <ModalFlower className="absolute -bottom-5 w-[230px] sm:w-[360px] xl:h-[172px] xl:w-[502px]" />
                </div>
                <div className="bg-slate-50  xl:pt-[62px]">
                  {/* <FormEst /> */}
                  <ul className="">
                    {estModalStatus
                      ? links.map(({ name, link }) => (
                          <li
                            key={name}
                            className="relative flex h-[38px] items-center pl-[52px] before:absolute before:left-0  before:content-[url('/image/check-mark.svg')]"
                          >
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          </li>
                        ))
                      : facebookLinks.map(({ name, link }) => (
                          <li
                            key={name}
                            className="relative flex h-[38px] items-center pl-[52px] before:absolute before:left-0  before:content-[url('/image/check-mark.svg')]"
                          >
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    estModalClose();
                  }}
                  className="lg:top-11 lg:right-11 absolute top-6 right-6"
                  aria-label="Зачинити модальне вікно"
                  aria-controls="close PopUp"
                >
                  <XMarkIcon className="text-button h-6 w-6" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
