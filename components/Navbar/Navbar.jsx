import { LanguageToggle, ButtonLink, Search } from 'components';

export const Navbar = ({
  linkValue,
  handleLocaleChange,
  locale,
  articles,
  onClick,
}) => {
  return (
    <div className="flex items-center gap-2 xl:gap-[54px]">
      <Search articles={articles} />

      <ButtonLink
        button
        className="ml-[33px] w-[152px] bg-white !px-0 !text-small text-fontBlueDark xl:ml-[72px]"
        onClick={onClick}
      >
        {linkValue}
      </ButtonLink>

      <LanguageToggle handleLocaleChange={handleLocaleChange} value={locale} />
    </div>
  );
};
