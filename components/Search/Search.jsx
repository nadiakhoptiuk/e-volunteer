import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const Search = ({ articles }) => {
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
    <div className="relative">
      <div className="relative border-b md:h-8 md:w-[228px] xl:h-11 xl:w-[522px]">
        <MagnifyingGlassIcon className="absolute left-5 h-5 w-5 translate-y-1/2  text-white" />

        <DebounceInput
          onChange={handleInputChange}
          type="text"
          value={searchWords}
          className="h-full w-full bg-transparent py-4 pl-[52px] pr-[20px] text-slate-600 placeholder:text-slate-300"
        />

        {searchWords && (
          <button
            type="button"
            onClick={resetForm}
            className="absolute right-[20px] translate-y-1/2 text-slate-600 transition-all hover:text-slate-400"
          >
            <XMarkIcon className="h-5 w-5 " />
          </button>
        )}
      </div>

      <ul className="absolute top-full left-0 right-0 z-20 max-h-[212px] overflow-auto rounded-lg border border-blue-200 shadow-lg">
        {filteredData &&
          filteredData.map(({ route, title, cardInfo }) => {
            return (
              <li
                key={cardInfo[0].id}
                className="h-[70px] border-b border-blue-200 bg-slate-50 text-slate-600"
              >
                <Link
                  href={route}
                  onClick={resetForm}
                  className="block h-full w-full overflow-hidden truncate text-ellipsis  whitespace-nowrap py-3 px-8 text-inherit transition-all hover:bg-blue-200 focus:bg-blue-200"
                >
                  {title}
                  <br />
                  <span className="truncate text-ellipsis text-xs font-light text-fontGreyLight">
                    {cardInfo[0].description}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
