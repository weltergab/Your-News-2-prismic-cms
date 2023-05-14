import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import { Contador } from '@/components/Contador'
import { ContadorSemAt } from '@/components/ContadorSemAt'

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { Header } from '@/components/Header'
import { Navegacao } from '@/components/Navegacao'
import { Noticias } from '@/components/Noticias'
import { Footer } from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  return (
    <>
      <div className='bg-color-bg bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col'>
        <Header />
        <Noticias projetos={projetos} />
        
        {/* <h1>{projetos[0].description}</h1> */}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'noti')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 10 * 1
  };
};