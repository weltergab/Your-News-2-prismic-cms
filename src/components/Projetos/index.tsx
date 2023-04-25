import Link from 'next/link';
import ProjetoItem from './ProjetoItem';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <>
      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
    </>
  );
}

export default Projetos;
