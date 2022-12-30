import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import ModalFlower from 'public/image/flower-modal.svg';
import FlowerCategory from 'public/image/flower-modal-tab.svg';

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
        className="relative z-20"
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
          <div className="bg-button fixed inset-0 bg-opacity-70 blur-xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center bg-fontGrey/50 sm:py-[71px] md:py-10 xl:py-1 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white px-5 py-[67px] text-lg leading-[22px] text-fontGrey transition-all sm:w-[440px] sm:rounded-[32px] sm:px-[44px]  sm:pt-[113px] sm:pb-[38px] md:w-[696px] md:px-[87px] md:pt-[104px] md:pb-10 xl:flex xl:h-[700px] xl:w-[1240px] xl:rounded-[20px] xl:px-[108px] xl:py-[40px]">
                <div className="text-start text-sm  leading-6  sm:text-small md:text-lg md:leading-[22px] xl:relative    xl:mr-[121px] ">
                  <Dialog.Title
                    as="h3"
                    className="text-big font-medium sm:text-middle md:text-[34px] md:leading-[39px] "
                  >
                    {estModalStatus ? 'Kallid Eestimaa elanikud!' : t('title')}
                  </Dialog.Title>
                  <p className="mt-[38px] sm:mt-5 md:mt-8 xl:w-[506px]">
                    {estModalStatus
                      ? 'Kahjuks sõjapõgenikud Ukrainast jätkuvalt tulevad Eestisse ning nad vajavad teie abi ja tuge! Saate vaadata, mida inimesed vajavad, või pakkuda teie abi meie telegrammi kanalis.'
                      : t('first')}
                  </p>
                  <p className="mt-3">
                    {estModalStatus
                      ? 'Tavaliselt on need põhilised asjad:'
                      : t('third')}
                  </p>
                  <ul className=" list-inside list-disc ">
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
                  <ModalFlower className="absolute left-[130px] bottom-[-10px] hidden xl:block xl:h-[154px] xl:w-[426px]" />
                </div>
                <div className="relative mt-10 text-sm leading-6 sm:text-lg sm:leading-[22px] md:mt-[80px] xl:mt-0 xl:pt-[62px]">
                  <ul className="">
                    {estModalStatus
                      ? links.map(({ name, link }) => (
                          <li
                            key={name}
                            className="relative mb-2 cursor-pointer items-center py-2 pl-[52px] before:absolute before:left-[7px] before:content-[url('/image/check-mark-light.svg')] last-of-type:mb-0 hover:text-yellowAccent  xl:mb-0"
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
                            className="relative mb-2 cursor-pointer items-center py-2 pl-[52px] before:absolute before:left-[7px] before:content-[url('/image/check-mark-light.svg')] last-of-type:mb-0 hover:text-yellowAccent  xl:mb-0"
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
                  <FlowerCategory className="absolute bottom-0 right-[-67px] hidden h-[612px] w-[215px] md:block xl:hidden" />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    estModalClose();
                  }}
                  className=" absolute top-5 right-5 sm:top-[33px] sm:right-[33px]"
                  aria-label="Зачинити модальне вікно"
                  aria-controls="close PopUp"
                >
                  <XMarkIcon className="h-[38px] w-[38px] transform rounded-[50%] p-1 text-blueAccent transition-all hover:bg-blueAccent hover:text-white" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
