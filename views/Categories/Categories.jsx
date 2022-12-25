import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { ButtonLink, Container } from '@/components';

export const Categories = ({ articles }) => {
  const { t } = useTranslation('common');

  return (
    <section className="py-[80px] md:py-20 xl:pt-[100px] xl:pb-10">
      <Container>
        <h2 className="visually-hidden">{t('categories')}</h2>

        <div className="grid gap-x-[20px] gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {articles?.map(({ cardInfo, title, route }) => {
            const { id, description, image } = cardInfo[0];

            return (
              <article
                key={id}
                className="flex h-[518px] flex-col rounded-[32px] bg-slate-50 p-6 text-slate-600 shadow-card max-md:w-full sm:max-w-[440px] md:max-w-[338px] xl:h-[542px] xl:max-w-[412px]"
              >
                <div className="mb-8 h-[220px] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    height={220}
                    width={392}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3 className="mb-4 text-left text-big font-medium text-fontGrey">
                  {title}
                </h3>
                <p className="text-left text-small font-normal text-fontGrey">
                  {description}
                </p>

                <ButtonLink
                  href={route}
                  className="mx-auto mt-auto block h-[56px] w-[194px]"
                >
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
