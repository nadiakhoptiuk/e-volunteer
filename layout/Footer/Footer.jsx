import Link from 'next/link';
import { Logo, Container } from 'components';
import Teleg from '../../public/image/teleg.svg';
import Mail from '../../public/image/mail.svg';
import * as s from './Footer.module.css';

export const Footer = ({ data }) => {
  const { additionalInfo, additionalPhone, connectText, email, telegram } =
    data.footer;

  return (
    <>
      {data?.footer && (
        <footer className={s.footer}>
          <Container>
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
                    className="group sm:mr-[10px] md:mr-[16px]"
                  >
                    <div
                      className={`${s.iconWrp} transition-colors group-hover:bg-white group-focus:bg-white`}
                    >
                      <Teleg
                        className={`${s.telegram} transition-colors group-hover:fill-blueAccent group-focus:fill-blueAccent`}
                      />
                    </div>
                  </a>
                </Link>
                <Link href={`mailto:${email}`} legacyBehavior>
                  <a
                    href={`mailto:${email}`}
                    aria-label={email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group xl:mr-20"
                  >
                    <div
                      className={`${s.iconWrp} transition-colors group-hover:bg-white group-focus:bg-white`}
                    >
                      <Mail
                        className={`${s.email} transition-colors group-hover:fill-blueAccent group-focus:fill-blueAccent`}
                      />
                    </div>
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
            <p className={s.deskText}>
              {additionalInfo}
              <Link
                href={`tel:${additionalPhone}`}
                className={`${s.link} pl-1`}
              >
                {additionalPhone}
              </Link>
            </p>
            <div className={s.copyright}>
              <span className="pr-1">&copy;</span>
              <span>{new Date().getFullYear()}</span>
              <p className="pl-1">E-VOLUNTEER</p>
            </div>
          </Container>
        </footer>
      )}
    </>
  );
};
