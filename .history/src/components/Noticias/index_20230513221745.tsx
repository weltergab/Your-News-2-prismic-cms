import Image from "next/image";
import { NoticiasItem } from "./NoticiasItem";

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

export function Noticias({ projetos }: ProjetosProps) {
  return (
    <section className="flex flex-col items-center mb-32">
      {projetos.slice(0, 1).map(projeto => (
        <NoticiasItem
          key={projeto.slug}
          img={projeto.thumbnail}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
        />
      ))}
    </section>
  );
}
