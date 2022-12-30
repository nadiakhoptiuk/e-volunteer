import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { ButtonLink } from '/components';
import Flower from 'public/image/flower-help.svg';
import {
  sectionCommon,
  sectionEst,
  section,
  flower,
  content,
  wrapper,
  buttonLink,
  buttonType,
} from './Help.module.css';

export const Help = ({ title, button, EST, help, estModal, openModal }) => {
  const { t } = useTranslation('common');

  const handleClick = evt => {
    evt.target.blur();
  };

  return (
    <section className={`${sectionCommon} ${EST ? sectionEst : section}`}>
      <div className={wrapper}>
        <Flower className={flower} />
        <h2 className={content}>{help ? help.title : title}</h2>
        {EST ? (
          <ButtonLink
            button
            className={buttonType}
            onClick={evt => {
              estModal();
              openModal();
              handleClick(evt);
            }}
          >
            {button}
          </ButtonLink>
        ) : (
          <ButtonLink href="helping" className={buttonLink}>
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
