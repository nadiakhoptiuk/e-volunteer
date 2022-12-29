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
            name="description"
            content={data[currentLocale].metaDescription}
          />
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
