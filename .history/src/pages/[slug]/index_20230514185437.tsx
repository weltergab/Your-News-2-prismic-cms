import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Image from 'next/image';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return 0;
  }

  return (
    <>
      <Head>
        <title>{projeto.title}</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <div className='bg-color-bg bg-center bg-cover bg-no-repeat mt-1 min-h-screen items-center flex flex-col'>

        <div className="bg-color-bg2 items-center flex flex-col w-full max-w-5xl">
          <div className="h-96 w-full border-color-bg2 bg-green-300 relative overflow-hidden">
            <Image
              src="/vert.jpg"
              alt="Minha imagem"
              fill
              style={{ objectFit: 'cover' }} // object-fit: "contain"
            />
          </div>
          <div className="h-auto py-6 mx-3 px-6 flex flex-col relative">
            <h1 className="font-medium pb-20 text-xl">{projeto.title}</h1>
            <p>{projeto.type}</p>
          </div>
        </div>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>

      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'noti')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params ?? {};

  const response = await prismic.getByUID('noti', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 10 * 1
  };
};
