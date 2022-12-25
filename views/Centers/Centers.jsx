import Flower from '@/public/image/flower-centres.svg';

export const Centers = ({ centers }) => {
  return (
    <section className=" bg-blueAccent py-20 text-white md:py-[100px]">
      <div className="container relative">
        <Flower className="hidden w-[214px] xl:absolute xl:top-[-62px] xl:right-5 xl:block" />
        <h2 className=" mb-12 text-big font-medium">{centers?.titleAtPage}</h2>
        <ul className="grid gap-9 md:grid-cols-2 md:gap-y-16 md:gap-x-[54px] xl:grid-cols-3 xl:gap-x-[130px]">
          {centers?.receptionCenter?.map(
            ({ id, city, phoneNumber, centerTitle, address }) => {
              const street = address.split(' ');

              return (
                <li
                  key={id}
                  className="border-b border-slate-50  md:first:row-span-2"
                >
                  {centerTitle && (
                    <h3 className="mb-5 text-middle md:mb-[52px] md:text-2xl">
                      {centerTitle}
                    </h3>
                  )}

                  <a
                    className="transition-all hover:text-slate-500 focus:text-slate-500"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href={`https://www.google.com.ua/maps/place/${street[0]}+${street[1]},${city}`}
                  >
                    {city && (
                      <p className="mb-3 text-lg tracking-tight">{city}</p>
                    )}
                    {address && (
                      <address className="mb-3 not-italic">{address}</address>
                    )}
                  </a>
                  {phoneNumber && (
                    <a
                      rel="noopener noreferrer nofollow"
                      className=" mb-3 inline-block text-lg leading-tight transition-all hover:text-slate-500 focus:text-slate-500"
                      href={`tel:${phoneNumber}`}
                    >
                      {phoneNumber}
                    </a>
                  )}
                </li>
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
};
