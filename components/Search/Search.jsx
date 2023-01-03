import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Backdrop from './Backdrop';
import s from './Search.module.css';

export const Search = ({ articles, onCloseMenu }) => {
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
      <div className={s.inputWrapper}>
        <MagnifyingGlassIcon className={s.glassIcon} />

        <DebounceInput
          onChange={handleInputChange}
          type="text"
          value={searchWords}
          className={s.input}
        />

        {searchWords && (
          <button type="button" onClick={resetForm} className={s.clearBtn}>
            <XMarkIcon className={s.clearIcon} />
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

Search.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      cardInfo: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          contentAtPage: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          image: PropTypes.object.isRequired,
        }).isRequired,
      ).isRequired,
      range: PropTypes.number.isRequired,
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onCloseMenu: PropTypes.func,
};
