import Image from "next/image";
import Link from "next/link";

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function NoticiasItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <Link href="noticiafull">
      <div className="bg-color-bg2 my-3 items-center flex flex-row h-32 md:h-40 mx-3 max-w-4xl border border-color-div">
        <div className="h-full w-2/6 border-color-bg2 bg-green-300 relative overflow-hidden">
          <Image
            src="/vert.jpg"
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-full w-4/6 px-6 border-8 border-color-bg2 by-5 overflow-hidden flex flex-col relative">
          <h2 className="font-medium">{title} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem architecto fugiat alias facere, explicabo, adipisci aut aliquam totam nisi perspiciatis itaque beatae iusto eaque, possimus laboriosam non eum dignissimos. Expedita.</h2>
          <p className="hidden md:block">{type} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa et hic eum porro, accusantium dolorum earum! Ipsam maxime tenetur totam similique architecto provident, blanditiis debitis facere sint, at consequatur. Reprehenderit?[</p>
        </div>
      </div>
    </Link>
  );
}
