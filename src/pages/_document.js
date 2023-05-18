import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Harshvardhan Agarwal - Product Designer"
        />
        <meta
          property="og:description"
          content="I am a product designer with experience in UX/UI design, product strategy, and user research. Check out my portfolio!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.harshii.works/" />
        <meta
          property="og:image"
          content="https://harshii.works/Twitter%20Banner.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
