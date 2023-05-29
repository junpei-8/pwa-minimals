import Document, { Html, Head, Main, NextScript } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/icon-180x180.png" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/icon-512x512.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
