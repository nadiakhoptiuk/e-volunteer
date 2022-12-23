import { Layout } from 'layout';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import nextI18NextConfig from '../next-i18next.config.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Hydrated>
      <Layout data={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Hydrated>
  );
}

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true);
    }
  }, []);
  return hydration ? children : <p>Loading...</p>;
};

export default appWithTranslation(MyApp, nextI18NextConfig);
