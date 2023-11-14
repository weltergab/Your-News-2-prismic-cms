import Image from "next/image";
import { NoticiasItem } from "./NoticiasItem";

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: any;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

export function Noticias({ projetos }: ProjetosProps) {
  return (
    <section className="flex flex-col items-center mb-32 w-full">
      {projetos.slice(0, 6).map(projeto => (
        <NoticiasItem
          key={projeto.slug}
          img={projeto.thumbnail}
          title={projeto.title}
          description={projeto.description}
          type={projeto.type}
          slug={projeto.slug}
        />
      ))}
    </section>
  );
}
