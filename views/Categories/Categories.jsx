import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { ButtonLink, Container } from '@/components';
import s from './Categories.module.css';

export const Categories = ({ articles }) => {
  const { t } = useTranslation('common');

  // const convertImage = (w, h) => `
  // <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <defs>
  //     <linearGradient id="g">
  //       <stop stop-color="#333" offset="20%" />
  //       <stop stop-color="#222" offset="50%" />
  //       <stop stop-color="#333" offset="70%" />
  //     </linearGradient>
  //   </defs>
  //   <rect width="${w}" height="${h}" fill="#333" />
  //   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  //   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  // </svg>`;

  // const toBase64 = str =>
  //   typeof window === 'undefined'
  //     ? Buffer.from(str).toString('base64')
  //     : window.btoa(str);

  return (
    <section className={s.section}>
      <Container>
        <h2 className="visually-hidden">{t('categories')}</h2>

        <div className={s.cardBox}>
          {articles?.map(({ cardInfo, title, route }) => {
            const { id, description, image, alt } = cardInfo[0];

            return (
              <article key={id} className={s.card}>
                <div className="mb-8 h-[220px] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={image.url}
                    alt={alt}
                    height={220}
                    width={392}
                    className={s.imageWrapper}
                    // placeholder="blur"
                    // blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    //   convertImage(220, 392),
                    // )}`}
                    // quality={70}
                    // loading="lazy"
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
