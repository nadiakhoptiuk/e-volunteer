import Link from 'next/link';
import { Logo } from 'components';
import Teleg from '../../public/image/teleg.svg';
import * as s from './Footer.module.css';

export const Footer = ({ data }) => {
  const { additionalInfo, connectText, email, telegram } = data.footer;

  return (
  <>
    { data?.footer && (
      <footer className={s.footer}>
        <div className="container">
          <div className={s.wrapper}>
            <Logo />
            <div className={s.innerWrapper}>
              <span className={s.text}>{connectText}</span>
              <Link href={telegram} legacyBehavior>
                <a
                  href={telegram}
                  aria-label={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.link}
                >
                  <Teleg className={s.telegram} />
                </a>
              </Link>
              <Link href={`mailto:${email}`} legacyBehavior>
                <a
                  href={`mailto:${email}`}
                  aria-label={email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.linkIcon}
                >
                  <Teleg className={s.email} />
                </a>
              </Link>
            </div>
          </div>
          <ul className={s.list}>
            {data?.articles &&
              data?.articles?.map(({ route, title }, index) => (
                <li className={s.item} key={index}>
                  <Link href={`/${route}`} className={s.link}>
                    {title}
                  </Link>
                </li>
              ))}
          </ul>
          <p className={s.deskText}>{additionalInfo}</p>
          <div className={s.copyright}>
            <span className="pr-1">&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <p className="pl-1">E-VOLUNTEER</p>
          </div>
        </div>
      </footer>
    )}
    </>
  );
};