// import { useCallback, useRef, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { XMarkIcon } from '@heroicons/react/24/solid';

export const Search = () => {
  return (
    // <div
    //   className="relative"
    // ref={searchRef}
    // >
    <div className="relative border-b md:h-8 md:w-[228px] xl:h-11 xl:w-[522px]">
      <MagnifyingGlassIcon className="absolute left-5 h-5 w-5 translate-y-1/2  text-white" />

      <input
        //   onChange={onChange}
        //   onFocus={onFocus}
        type="text"
        //   value={query}
        className="h-full w-full bg-transparent text-slate-600 placeholder:text-slate-300"
        id="search"
        //   placeholder={t('searchPlaceholder')}
      />
    </div>
    // </div>
  );
};
