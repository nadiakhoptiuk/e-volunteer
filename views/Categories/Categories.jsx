import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { convertImage, toBase64 } from 'utils/blurDataURL';
import { ButtonLink, Container } from '@/components';
import 'aos/dist/aos.css';
import s from './Categories.module.css';

export const Categories = ({ articles }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={s.section}>
      <Container>
        <h2 className="visually-hidden">{t('categories')}</h2>

        <div className={s.cardBox}>
          {articles?.map(({ cardInfo, title, route }) => {
            const { id, description, image, alt } = cardInfo[0];

            return (
              <article key={id} className={s.card} data-aos="fade-up">
                <div className="mb-8 h-[220px] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={image.url}
                    alt={alt}
                    height={220}
                    width={392}
                    className={s.imageWrapper}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(220, 392),
                    )}`}
                    quality={70}
                    loading="lazy"
                  />
                </div>

                <h3 className={s.cardTitle}>{title}</h3>

                <p className={s.cardDescription}>{description}</p>

                <ButtonLink href={route} className={s.btnChoose}>
                  {t('btnChoose')}
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

Categories.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      cardInfo: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          contentAtPage: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          image: PropTypes.object.isRequired,
        }).isRequired,
      ).isRequired,
      range: PropTypes.number.isRequired,
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
