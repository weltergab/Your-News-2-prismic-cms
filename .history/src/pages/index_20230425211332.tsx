import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import { Contador } from '@/components/Contador'
import { ContadorSemAt } from '@/components/ContadorSemAt'

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import Projetos from '@/components/Projetos'

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
    <div className='bg-blur bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col'>
      

    

      {/* <Projetos projetos={projetos} /> */}
    </div>
  )
}





export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')],
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
    revalidate: 86400
  };
};