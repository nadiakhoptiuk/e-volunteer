import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { ButtonLink, Container } from '@/components';
import s from './Categories.module.css';

export const Categories = ({ articles }) => {
  const { t } = useTranslation('common');

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
