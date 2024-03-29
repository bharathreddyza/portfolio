import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Bharath | Fullstack Developer"
        titleTemplate="Bharath | Fullstack Developer"
        defaultTitle="Bharath | Fullstack Developer"
        description="Hey! I'm Bharath, A Fullstack javascript Developer"
        openGraph={{
          url: "https://www.bharath.live/",
          title: "bharath | Fullstack Developer",
          description:
            "Hey! I'm Bharath,",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "bharath | software engineer",
            },
          ],
        }}
        twitter={{
          handle: "@bharthza",
          site: "@bharathza",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Fullstack dveloper,Frontend Developer, bharath, Web Developer, web development, web developer, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/bharath.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
