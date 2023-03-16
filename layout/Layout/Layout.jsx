import Head from 'next/head';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { Banner, HelpModal } from '@/components';
import { Footer, Header } from 'layout';
import { wrapper, main } from './Layout.module.css';

const LinkToTop = dynamic(() =>
  import('../../components/LinkToTop/LinkToTop').then(mod => mod.LinkToTop),
);

export const Layout = ({ children, data, modal }) => {
  const isOpen = modal.isOpen;

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }, [isOpen]);

  return (
    <div className={wrapper}>
      <Head>
        <title>E-VOLUNTEER</title>
      </Head>
      <Banner data={data.banner} />

      <Header data={data.articles} onClick={modal.openModal} />

      <main className={main}>{children}</main>

      <LinkToTop />

      <Footer data={data} />
      <HelpModal
        isOpen={isOpen}
        closeModal={modal.closeModal}
        estModalStatus={modal.estModalStatus}
        estModalClose={modal.estModalClose}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
