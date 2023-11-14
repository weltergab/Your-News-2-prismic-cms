import Image from "next/image";
import Link from "next/link";
import { PrismicRichText } from '@prismicio/react'

interface ProjetoProps {
  title: string;
  description: any;
  type: string;
  slug: string;
  img: string;
}

export function NoticiasItem({ title, description, type, slug, img }: ProjetoProps) {
  return (
    <Link href={`/${slug}`} className="bg-color-bg2 my-3 items-center flex flex-row h-32 md:h-40 w-11/12 md:w-4/6 border border-color-div">
        <div className="h-full w-2/6 border-color-bg2 bg-white relative overflow-hidden">
          <Image
            src={img}
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-full w-4/6 px-3 md:px-6 border-8 border-color-bg2 by-5 overflow-hidden flex flex-col relative">
          <h2 className="font-semibold pb-1 md:py-3 md:text-lg">{title}</h2>
          {/* <p className="text-sm md:block tracking-wide">{type}</p> */}
          <div className="text-sm md:block tracking-wide">
            <PrismicRichText field={description}/>
          </div>
        </div>
    </Link>
  );
}



