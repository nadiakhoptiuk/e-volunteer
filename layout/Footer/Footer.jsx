import Link from 'next/link';
import { Logo } from 'components';
import Teleg from '../../public/image/teleg.svg';

export const Footer = ({data}) => {
  const { additionalInfo, connectText, email, telegram } = data.footer;

  return (
    <footer className="bg-blue-400">
      <div className="container">
        <div className="">
          <div className="flex flex-wrap items-baseline justify-between border-b-2 pb-[24px] pt-[24px]">
            <Logo />
            <div className='flex'><span className="mr-[19px] text-sm text-white">
                  {connectText}
            </span> 
            <Link href={telegram} legacyBehavior>
              <a
                href={telegram}
                aria-label={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Teleg className="w-[22px] mr-[19px]" />
              </a>
              </Link>
            <Link href={`mailto:${email}`} legacyBehavior>
              <a
                href={`mailto:${email}`}
                aria-label={email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Teleg className="w-[22px] rotate-180" />
              </a>
            </Link></div>
          </div>

          <ul className="grid grid-cols-4 gap-y-5 pb-[32px] pt-[32px]">
            {data?.articles &&
              data?.articles?.map(({ route, title }, index) => (
                <li className="text-white" key={index}>
                  <Link href={`/${route}`} className="transition-all hover:text-slate-200 focus:text-slate-200">
                      {title}
                  </Link>
                </li>
              ))}
          </ul>

          <div className="border-b-2 pb-[24px] text-center text-white">
            <p>{additionalInfo}</p>
          </div>

          <div className="flex pb-[24px] pt-[20px]">
            <span className="pr-1 text-white">&copy;</span>
            <span className="text-white ">{new Date().getFullYear()}</span>
            <p className="pl-1 text-white">E-VOLUNTEER</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
