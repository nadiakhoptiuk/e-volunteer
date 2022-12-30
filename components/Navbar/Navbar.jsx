import { LanguageToggle, ButtonLink, Search } from 'components';

export const Navbar = ({
  linkValue,
  handleLocaleChange,
  locale,
  articles,
  onClick,
}) => {
  return (
    <div className="flex items-center gap-10">
      <Search articles={articles} />

      <ButtonLink
        button
        className="ml-[46px] w-[152px] bg-white !px-0 !text-small text-fontBlueDark"
        onClick={onClick}
      >
        {linkValue}
      </ButtonLink>

      <LanguageToggle handleLocaleChange={handleLocaleChange} value={locale} />
    </div>
  );
};
