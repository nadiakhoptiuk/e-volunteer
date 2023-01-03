import Document, { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

const data = {
  uk: {
    metaDescription: 'Електронний волонтер для допомоги біженцям',
    metaTitle: 'E-VOLUNTEER',
  },
  ru: {
    metaDescription: 'Электронный волонтёр для помощи беженцам',
    metaTitle: 'E-VOLUNTEER',
  },
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <meta name="theme-color" content="#fff" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            size="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            size="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            size="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="twitter:description"
            content={data[currentLocale].metaDescription}
          />
          <meta name="twitter:title" content={data[currentLocale].metaTitle} />
          <meta name="twitter:card" content="summary" />
          <meta property="og:image" content={'/image/cower.png'} />
          <meta property="og:image:width" content="968" />
          <meta property="og:image:height" content="504" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={data[currentLocale].metaDescription}
          />
          <meta property="og:title" content={data[currentLocale].metaTitle} />
          <meta
            name="description"
            content={data[currentLocale].metaDescription}
          />

          <link rel="canonical" href="https://e-volunteer.vercel.app/" />
          <link rel="alternate" href="https://e-volunteer.vercel.app/" />
          <base target="_blank"></base>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
