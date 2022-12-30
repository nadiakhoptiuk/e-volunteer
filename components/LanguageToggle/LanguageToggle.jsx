import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import * as s from './LanguageToggle.module.css';

const locales = [
  { name: 'ru', id: 'ru' },
  { name: 'ua', id: 'uk' },
];

export const LanguageToggle = ({ handleLocaleChange, value }) => {
  const { locale } = useRouter();
  const selectedLng = value ?? locale;

  return (
    <Listbox value={selectedLng} onChange={handleLocaleChange}>
      <div className="relative">
        <Listbox.Button className={s.listboxbutton}>
          <span className="block truncate uppercase">
            {selectedLng === 'uk' ? 'ua' : selectedLng}
          </span>

          <span className={s.chevronDownSpan}>
            <ChevronDownIcon className={s.icon} aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={s.listboxoptions}>
            {locales.map(locale => (
              <Listbox.Option
                id={locale.id}
                key={locale.id}
                className={({ active }) =>
                  `${s.item} ${active ? s.activeClass : 'text-fontGrey'}`
                }
                value={locale}
              >
                {locale.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
