import { Container } from '@/components';
import Image from 'next/image';
// import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Categories = ({ articles }) => {
  const { t } = useTranslation('common');

  return (
    <section className="py-[80px] md:py-20 xl:pt-[100px] xl:pb-10">
      <Container>
        <h2 className="visually-hidden">{t('categories')}</h2>

        {articles?.map(({ cardInfo, title }) => {
          const { id, description, image } = cardInfo[0];

          return (
            <article
              key={id}
              className="mx-auto mb-[40px] flex h-[518px] flex-col items-center justify-between rounded-[32px] bg-slate-50 px-6 pt-6 pb-10 text-slate-600 shadow-card sm:max-w-[440px] md:max-w-[330px] md:pb-12 xl:h-[542px] xl:max-w-[412px]"
            >
              <Image src={image.url} alt={image.alt} width={364} height={220} />
              <h3 className="mt-8 mb-4 text-2xl font-medium leading-7">
                {title}
              </h3>
              <p>{description}</p>

              {/* <Link href={route}>{t('buttonCard')}</Link> */}
            </article>
          );
        })}
      </Container>
    </section>
  );
};
