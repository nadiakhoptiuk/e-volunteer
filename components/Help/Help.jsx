// import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import {
  sectionCommon,
  sectionEst,
  section,
  flower,
  content,
  wrapper,
} from './Help.module.css';

import { ButtonLink } from '/components';
import Flower from 'public/image/flower-help.svg';

const Help = ({ title, button, EST, help, ...props }) => {
  const { t } = useTranslation('common');

  return (
    <section className={`${sectionCommon} ${EST ? sectionEst : section}`}>
      <div className={wrapper}>
        <Flower className={flower} />
        <h2 className={content}>{help ? help.title : title}</h2>
        {EST ? (
          <ButtonLink
            button
            className="mx-auto !px-14 text-white md:mx-0"
            {...props}
          >
            {button}
          </ButtonLink>
        ) : (
          <ButtonLink href="helping" className="mx-auto md:mx-0 ">
            {t('btnChoose')}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};

export default Help;

// Help.propTypes = {
//   title: PropTypes.string.isRequired,
//   button: PropTypes.string.isRequired,
//   href: PropTypes.string,
//   EST: PropTypes.bool,
// };
