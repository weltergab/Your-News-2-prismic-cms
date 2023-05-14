import Image from "next/image";
import Link from "next/link";

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, type, slug, img }: ProjetoProps) {
  return (
      <Link href="noticiafull">
      <div className="bg-color-bg2 my-3 items-center flex flex-row h-32 md:h-40 mx-3 max-w-4xl border border-color-div">
        <div className="h-full w-2/6 border-color-bg2 bg-green-300 relative overflow-hidden">
          <Image
            src=""
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-full w-4/6 px-6 border-8 border-color-bg2 by-5 overflow-hidden flex flex-col relative">
          <h2 className="font-medium">{title}</h2>
          <p className="hidden md:block">{type}</p>
        </div>
      </div>
      </Link>
  );
}
