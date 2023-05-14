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
      <div className="flex flex-col items-center mb-32">

       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       

      </div>
  );
}
