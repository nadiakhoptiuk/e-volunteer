// import Link from 'next/link';

import { LanguageToggle, ButtonLink } from 'components';
// import LangSwitcher from 'components/LanguageToggle/LanguageToggle';

export const Navbar = ({ linkValue, handleLocaleChange, locale }) => {
  console.log(locale);

  return (
    <div className="flex items-center gap-10">
      {/* <Link
        href=""
        className="flex !h-[44px] !w-[196px] items-center justify-center
                rounded-xl bg-button text-white transition
                duration-300 ease-in-out hover:bg-yellow-200 hover:text-slate-600 focus:bg-yellow-200 focus:text-slate-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkValue}
      </Link> */}
      <ButtonLink button className=" bg-white text-fontBlueDark ">
        {linkValue}
      </ButtonLink>

      <LanguageToggle handleLocaleChange={handleLocaleChange} value={locale} />
    </div>
  );
};
