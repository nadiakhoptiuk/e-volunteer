import { LanguageToggle, ButtonLink, Search } from 'components';
import PropTypes from 'prop-types';
import * as s from './Navbar.module.css';

export const Navbar = ({
  linkValue,
  handleLocaleChange,
  locale,
  articles,
  onClick,
}) => {
  return (
    <div className={s.wrap}>
      <Search articles={articles} />

      <ButtonLink button className={s.buttonlink} onClick={onClick}>
        {linkValue}
      </ButtonLink>

      <LanguageToggle handleLocaleChange={handleLocaleChange} value={locale} />
    </div>
  );
};

Navbar.propTypes = {
  handleLocaleChange: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  linkValue: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
