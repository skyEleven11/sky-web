import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/images/favicon.ico" />
        <meta name="title" content="Sky Eleven Trading Solutions" />
        <meta
          name="description"
          content="  Somos un equipo de profesionales con una misma perspectiva, brindar
            soluciones comerciales en la mayoría de las actividades económicas
            de nuestros clientes, educando, acompañando, y mejorando todo
            aspecto que sea posible."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Sky Eleven Trading Solutions" />
        <meta
          property="og:description"
          content="  Somos un equipo de profesionales con una misma perspectiva, brindar
            soluciones comerciales en la mayoría de las actividades económicas
            de nuestros clientes, educando, acompañando, y mejorando todo
            aspecto que sea posible."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Sky Eleven Trading Solutions" />
        <meta
          property="twitter:description"
          content="  Somos un equipo de profesionales con una misma perspectiva, brindar
            soluciones comerciales en la mayoría de las actividades económicas
            de nuestros clientes, educando, acompañando, y mejorando todo
            aspecto que sea posible."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet"/>
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QV719GV5D3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "G-QV719GV5D3");
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://ssl.gstatic.com/trends_nrtr/3261_RC08/embed_loader.js"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        trends.embed.renderExploreWidget(
          "TIMESERIES",
          {
            comparisonItem: [
              { keyword: "trading", geo: "AR", time: "today 5-y" },
              { keyword: "inversiones", geo: "AR", time: "today 5-y" },
            ],
            category: 0,
            property: "",
          },
          {
            exploreQuery: "date=today%205-y&geo=AR&q=trading,inversiones&hl=es",
            guestPath: "https://trends.google.es:443/trends/embed/",
          }
        );
        
        `}
        </Script>
    
      </body>
    </Html>
  );
}
