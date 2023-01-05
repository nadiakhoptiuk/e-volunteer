import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Backdrop from './Backdrop';
import s from './Search.module.css';

export const Search = ({ articles, menu, onCloseMenu }) => {
  const [searchWords, setSearchWords] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const [transformedArticles, setTransformedArticles] = useState(null);

  const { t } = useTranslation('common');

  useEffect(() => {
    const transformData = string => {
      // regex for markdown links
      const regex1 = /\[(.*?)\]\((.*?)\)/g;
      const regex2 = /(#)+/g;
      const regex3 = /(\*)+/g;

      return string
        .replace(regex1, '$1')
        .replace(regex2, '')
        .replace(regex3, '');
    };

    const newArticles = articles.reduce((acc, article) => {
      return [
        ...acc,
        {
          ...article,
          cardInfo: [
            {
              ...article.cardInfo[0],
              contentAtPage: transformData(article.cardInfo[0].contentAtPage),
            },
          ],
        },
      ];
    }, []);

    setTransformedArticles(newArticles);
  }, [articles]);

  const cutContent = useCallback(
    data => {
      if (data.length === 0) {
        setFilteredData([]);
        return;
      }

      return data?.reduce((acc, { route, title, cardInfo }) => {
        const index = cardInfo[0].contentAtPage
          .toLowerCase()
          .indexOf(searchWords.toLowerCase());

        let filteredContent =
          index === -1
            ? ''
            : cardInfo[0].contentAtPage
                .slice(index, index + 28)
                .split('\n\n')[0];

        if (filteredContent !== '') {
          if (filteredContent[0] === filteredContent[0]?.toUpperCase()) {
            filteredContent = filteredContent.trim().concat('...');
          } else {
            filteredContent = '...'
              .concat(filteredContent.trim())
              .concat('...');
          }
        }

        return [
          ...acc,
          {
            route: route,
            title: title,
            content: filteredContent,
            id: cardInfo[0].id,
          },
        ];
      }, []);
    },
    [searchWords],
  );

  useEffect(() => {
    if (!searchWords.trim()) {
      setFilteredData(null);
      return;
    }

    const filteredArticles = transformedArticles?.filter(
      ({ title, cardInfo }) =>
        title.toLowerCase().includes(searchWords) ||
        cardInfo[0].description.toLowerCase().includes(searchWords) ||
        cardInfo[0].contentAtPage.toLowerCase().includes(searchWords),
    );

    const results = cutContent(filteredArticles);

    setFilteredData(results);
    setIsSearchOpen(true);
  }, [cutContent, searchWords, transformedArticles]);

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
          debounceTimeout={300}
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
              {filteredData?.map(({ route, title, content, id }) => {
                return (
                  <li key={id} className={s.resultItem}>
                    <Link
                      href={route}
                      onClick={
                        menu
                          ? () => {
                              resetForm();
                              onCloseMenu();
                            }
                          : () => {
                              resetForm();
                            }
                      }
                      className={s.resultLink}
                    >
                      {title}

                      <br />

                      <span className={s.resultDesc}>
                        <ReactMarkdown>{content}</ReactMarkdown>
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
  menu: PropTypes.bool,
};
