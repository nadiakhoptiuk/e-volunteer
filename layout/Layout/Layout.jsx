import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { Banner } from '@/components';
import { Footer, Header } from 'layout';
import { wrapper, main } from './Layout.module.css';
const LinkToTop = dynamic(() =>
  import('../../components/LinkToTop/LinkToTop').then(mod => mod.LinkToTop),
);

export const Layout = ({ children, banner }) => {
  return (
    <div className={wrapper}>
      <Banner banner={banner} />

      <Header />

      <main className={main}>{children}</main>

      <LinkToTop />

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
