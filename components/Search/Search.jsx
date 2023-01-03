import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import s from './Search.module.css';
import Backdrop from './Backdrop';
import { useTranslation } from 'next-i18next';

export const Search = ({ articles, menu, onCloseMenu }) => {
  const [searchWords, setSearchWords] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResults, setIsResults] = useState(false);

  const { t } = useTranslation('common');

  useEffect(() => {
    if (!searchWords.trim()) {
      setFilteredData(null);
      return;
    }

    const filteredArticles = articles.filter(
      ({ title, cardInfo }) =>
        title.toLowerCase().includes(searchWords) ||
        cardInfo[0].description.toLowerCase().includes(searchWords) ||
        cardInfo[0].contentAtPage.toLowerCase().includes(searchWords),
    );

    setFilteredData(filteredArticles);
    setIsSearchOpen(true);
  }, [articles, searchWords]);

  useEffect(() => {
    if (!searchWords && !filteredData?.length > 0) {
      setIsSearchOpen(false);
      setIsResults(false);
    }

    if (searchWords && !filteredData?.length > 0) {
      setIsSearchOpen(true);
      setIsResults(false);
    }

    if (searchWords && filteredData?.length > 0) {
      setIsSearchOpen(true);
      setIsResults(true);
    }
  }, [searchWords, filteredData, isResults, isSearchOpen]);

  const handleInputChange = ({ target: { value } }) => {
    setSearchWords(value.toLowerCase());
  };

  const resetForm = () => {
    setSearchWords('');
    setIsSearchOpen(false);
  };

  return (
    <div className={s.searchBox}>
      <div
        className={`${
          menu ? 'border-fontGrey' : ''
        } relative h-8 border-b-[1px] border-fontGrey md:w-[280px] md:border-white xl:h-11 xl:w-[505px]`}
      >
        <MagnifyingGlassIcon
          className={`absolute left-[8px] top-0 z-[31] h-6 w-6 translate-y-[4px] text-white xl:top-[50%] xl:translate-y-[-50%] ${
            menu ? '!text-fontGrey' : ''
          }`}
        />

        <DebounceInput
          onChange={handleInputChange}
          type="text"
          value={searchWords}
          className={s.input}
        />

        {searchWords && (
          <button type="button" onClick={resetForm} className={s.clearBtn}>
            <XMarkIcon
              className={`h-5 w-5 ${menu ? 'text-fontGrey' : 'text-white'}`}
            />
          </button>
        )}
      </div>

      {isSearchOpen && (
        <>
          <Backdrop
            className={s.backdrop}
            handleCloseFunction={resetForm}
            flag={isSearchOpen}
          />

          {isResults && (
            <ul className={s.resultList}>
              {filteredData?.map(({ route, title, cardInfo }) => {
                return (
                  <li key={cardInfo[0].id} className={s.resultItem}>
                    <Link
                      href={route}
                      onClick={() => {
                        resetForm();
                        onCloseMenu();
                      }}
                      className={s.resultLink}
                    >
                      {title}

                      <br />

                      <span className={s.resultDesc}>
                        {cardInfo[0].description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {!isResults && (
            <div className={s.notFound}>
              <p>{t('notFound')}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
