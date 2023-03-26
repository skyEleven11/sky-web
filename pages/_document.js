import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
