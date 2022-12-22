import PropTypes from 'prop-types';
import { Footer, Header } from 'layout';
import { wrapper, main } from './Layout.module.css';
import Banner from 'components/Banner/Banner';

export const Layout = ({ children, banner }) => {
  return (
    <div className={wrapper}>
      <Banner banner={banner} />

      <Header />

      <main className={main}>{children}</main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
