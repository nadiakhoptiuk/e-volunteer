import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import s from './Search.module.css';

export const Search = ({ articles, menu }) => {
  const [searchWords, setSearchWords] = useState('');
  const [filteredData, setFilteredData] = useState(null);

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
  }, [articles, searchWords]);

  const handleInputChange = ({ target: { value } }) => {
    setSearchWords(value.toLowerCase());
  };

  const resetForm = () => {
    setSearchWords('');
  };

  return (
    <div className={s.searchBox}>
      <div
        className={`${
          menu && 'border-blueAccent'
        } relative border-b md:h-8 md:w-[228px] xl:h-11 xl:w-[522px]`}
      >
        <MagnifyingGlassIcon
          className={`absolute left-5 h-5 w-5 translate-y-1/2 text-white ${
            menu && '!text-blueAccent'
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
            <XMarkIcon className={`h-5 w-5 ${menu && 'text-blueAccent'}`} />
          </button>
        )}
      </div>

      {filteredData && (
        <ul className={s.resultList}>
          {filteredData?.map(({ route, title, cardInfo }) => {
            return (
              <li key={cardInfo[0].id} className={s.resultItem}>
                <Link href={route} onClick={resetForm} className={s.resultLink}>
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
    </div>
  );
};
