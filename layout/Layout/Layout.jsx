import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { Banner } from '@/components';
import { Footer, Header } from 'layout';
import { wrapper, main } from './Layout.module.css';
const LinkToTop = dynamic(() =>
  import('../../components/LinkToTop/LinkToTop').then(mod => mod.LinkToTop),
);

export const Layout = ({ children, data }) => {
  return (
    <div className={wrapper}>
      <Banner data={data.banner} />

      <Header data={data.articles} />

      <main className={main}>{children}</main>

      <LinkToTop />

      <Footer data={data} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
