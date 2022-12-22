import { Layout } from 'layout';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // console.log(pageProps.banner);
  // console.log(pageProps);
  return (
    <Layout banner={pageProps.banner}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
