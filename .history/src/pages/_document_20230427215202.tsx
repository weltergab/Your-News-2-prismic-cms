import { Footer } from '@/components/Footer'
import { Navegacao } from '@/components/Navegacao'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navegacao />
        
        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  )
}
