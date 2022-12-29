import PropTypes from 'prop-types';
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

export const Help = ({ title, button, EST, help, estModal, openModal }) => {
  const { t } = useTranslation('common');

  return (
    <section className={`${sectionCommon} ${EST ? sectionEst : section}`}>
      <div className={wrapper}>
        <Flower className={flower} />
        <h2 className={content}>{help ? help.title : title}</h2>
        {EST ? (
          <ButtonLink
            button
            className="mx-auto mt-6 w-[146px] !px-14 text-white md:mx-0 md:mt-0 xl:ml-12"
            onClick={() => {
              estModal();
              openModal();
            }}
          >
            {button}
          </ButtonLink>
        ) : (
          <ButtonLink
            href="helping"
            className="mx-auto mt-[26px] w-[280px] sm:w-[194px] md:mx-0 md:mt-0"
          >
            {t('btnChoose')}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};

Help.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
  EST: PropTypes.bool,
  help: PropTypes.object,
};
