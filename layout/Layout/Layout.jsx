import PropTypes from 'prop-types';
import { Footer, Header } from 'layout';
import { wrapper, main } from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={wrapper}>
      <Header />

      <main className={main}>{children}</main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
