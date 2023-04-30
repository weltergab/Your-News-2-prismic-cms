import { Footer } from '@/components/Footer'
import { Navegacao } from '@/components/Navegacao'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
      <body>
        <Navegacao />
        
        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  )
}