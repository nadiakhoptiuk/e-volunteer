import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { ButtonLink } from '/components';
import { routes } from 'routes';
import Flower from 'public/image/flower-help.svg';
import * as s from './Help.module.css';

export const Help = ({ title, button, EST, help, estModal, openModal }) => {
  const { t } = useTranslation('common');

  const handleClick = evt => {
    evt.target.blur();
  };

  return (
    <section className={`${s.sectionCommon} ${EST ? s.sectionEst : s.section}`}>
      <div className={s.wrapper}>
        <Flower className={`${EST ? s.flowerEst : s.flower}`} />
        <h2 className={s.content}>{help ? help.title : title}</h2>
        {EST ? (
          <ButtonLink
            button
            className={s.buttonType}
            onClick={evt => {
              estModal();
              openModal();
              handleClick(evt);
            }}
          >
            {button}
          </ButtonLink>
        ) : (
          <ButtonLink href={routes.HELPING} className={s.buttonLink}>
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
