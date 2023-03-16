import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import Flower from '@/public/image/flower-centres.svg';
import 'aos/dist/aos.css';
import * as s from './Centres.module.css';

export const Centers = ({ centers }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={s.section} data-aos="fade-up">
      <div className="container relative">
        <Flower className={s.flower} />

        <h2 className={s.title}>{centers?.titleAtPage}</h2>

        <ul className={s.list}>
          {centers?.receptionCenter?.map(
            ({ id, city, phoneNumber, centerTitle, address, href }) => {
              return (
                <li key={id} className={s.item}>
                  {centerTitle && (
                    <h3 className={s.titleSecond}>{centerTitle}</h3>
                  )}

                  <a
                    className={s.link}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    href={href}
                  >
                    {city && <p className={s.city}>{city}</p>}
                    {address && (
                      <address className={s.address}>{address}</address>
                    )}
                  </a>

                  {phoneNumber && (
                    <a
                      rel="noopener noreferrer nofollow"
                      className={s.phone}
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

Centers.propTypes = {
  centers: PropTypes.object,
};
