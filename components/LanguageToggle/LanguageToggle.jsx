// import { useRouter } from 'next/router';
// import { Fragment, useState } from 'react';
// import { Listbox, Transition } from '@headlessui/react';
// import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

// const locales = [
//   { name: 'ru', id: 'ru' },
//   { name: 'ua', id: 'uk' },
// ];

// export const LanguageToggle = ({ handleLocaleChange, value }) => {
//   const { locale } = useRouter();
//   const [selected] = useState(value ?? locale);
//   console.log(selected, 'selected');
//   console.log(value, 'value');
//   console.log(locale, 'locale');

//   return (
//     <Listbox value={selected} onChange={handleLocaleChange}>
//       <div className="relative h-[32px] w-[88px]">
//         <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-slate-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
//           <span className="block truncate font-normal uppercase">
//             {selected === 'uk' ? 'ua' : selected}
//           </span>

//           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//             <ChevronUpDownIcon
//               className="h-5 w-5 text-gray-400"
//               aria-hidden="true"
//             />
//           </span>
//         </Listbox.Button>

//         <Transition
//           as={Fragment}
//           leave="transition ease-in duration-100"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {locales.map(locale => (
//               <Listbox.Option
//                 id={locale.id}
//                 key={locale.id}
//                 className={({ active }) =>
//                   `relative cursor-pointer select-none px-4 py-2 text-center uppercase transition-all ${
//                     active ? 'bg-blue-200 text-amber-900' : 'text-gray-900'
//                   }`
//                 }
//                 value={locale}
//               >
//                 {({ selected }) => (
//                   <>
//                     <span
//                       className={`block truncate uppercase ${
//                         selected ? 'font-medium' : 'font-normal'
//                       }`}
//                     >
//                       {locale.name}
//                     </span>
//                   </>
//                 )}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </Transition>
//       </div>
//     </Listbox>
//   );
// };

// //   <div className="">
// //     <button type="button" onClick={handleLocaleChange}>
// //       {/* <span>{normalizeLang(language)}</span */}
// //       {locale}
// //     </button>
// //   </div>
// // );
// // };
// import React from 'react';
// import { useRouter } from 'next/router';
// // import Backdrop from '../../../reusable/BackDrop';
// // import useShowElement from '../../../../hooks/useShowElement';
// // import LangSelect from './LangSelect';
// import LangButton from './LangButton';

// const getNormalizeData = lang => ({
//   label: (lang === 'uk' ? 'ua' : lang).toUpperCase(),
//   value: lang,
// });

// const LangSwitcher = ({ className = '' }) => {
//   const router = useRouter();
//   const { locales, locale: activeLocale } = router;

//   // const [render, show, classes, onToggle] = useShowElement();

//   const langData = [
//     getNormalizeData(activeLocale),
//     ...locales.filter(lng => lng !== activeLocale).map(getNormalizeData),
//   ];

//   return (
//     <>
//       <div className={`relative cursor-pointer ${className}`}>
//         <LangButton
//           currentLanguage={getNormalizeData(activeLocale).label}
//           // isOpenMenu={show}
//           // onClick={onToggle}
//         />
//         {/* {render && (
//           <LangSelect
//             langData={langData}
//             className={classes}
//             onClick={onToggle}
//           />
//         )} */}
//       </div>
//       {/* {show && <Backdrop onClose={onToggle} transparent />} */}
//     </>
//   );
// };

// export default LangSwitcher;

import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const locales = [
  { name: 'ru', id: 'ru' },
  { name: 'ua', id: 'uk' },
];

export const LanguageToggle = ({ handleLocaleChange, value }) => {
  const { locale } = useRouter();
  const [selected] = useState(value ?? locale);

  return (
    <Listbox value={selected} onChange={handleLocaleChange}>
      <div className="relative h-[32px] w-[88px]">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-slate-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
          <span className="block truncate font-normal uppercase">
            {selected === 'uk' ? 'ua' : selected}
          </span>

          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {locales.map(locale => (
              <Listbox.Option
                id={locale.id}
                key={locale.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none px-4 py-2 text-center uppercase transition-all ${
                    active ? 'bg-blue-200 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={locale}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate uppercase ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {locale.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
