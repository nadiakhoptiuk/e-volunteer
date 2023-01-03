import Flower from '@/public/image/flower-centres.svg';

export const Centers = ({ centers }) => {
  return (
    <section className=" bg-blueAccent py-20 text-white md:py-[100px]">
      <div className="container relative">
        <Flower className="hidden h-[214px] w-[260px] xl:absolute xl:top-[-62px] xl:right-5 xl:block" />
        <h2 className="mb-5 text-big font-medium sm:mb-12 md:mb-[100px] md:text-[40px] md:leading-[1.15]">
          {centers?.titleAtPage}
        </h2>
        <ul className="grid gap-9 sm:w-[305px] md:w-auto md:grid-cols-2 md:gap-y-16 md:gap-x-[54px] xl:grid-cols-3 xl:gap-x-[125px] xl:gap-y-10">
          {centers?.receptionCenter?.map(
            ({ id, city, phoneNumber, centerTitle, address, href }) => {
              return (
                <li
                  key={id}
                  className="border-b border-white  md:first:row-span-2"
                >
                  {centerTitle && (
                    <h3 className="mb-5 text-middle md:mb-[52px] md:text-big">
                      {centerTitle}
                    </h3>
                  )}

                  <a
                    className=" transition-all hover:text-yellowAccent focus:text-yellowAccent"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href={href}
                  >
                    {city && (
                      <p className="mb-3 text-lg tracking-tight">{city}</p>
                    )}
                    {address && (
                      <address className="mb-3 not-italic md:text-base md:leading-6 xl:text-small">
                        {address}
                      </address>
                    )}
                  </a>
                  {phoneNumber && (
                    <a
                      rel="noopener noreferrer nofollow"
                      className=" mb-3 inline-block text-lg leading-tight transition-all hover:text-yellowAccent focus:text-yellowAccent"
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
