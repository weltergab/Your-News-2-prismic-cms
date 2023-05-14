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
    <Link href="noticiafull" className="bg-color-bg2 my-3 items-center flex flex-row h-32 md:h-40 w-3/6 border border-color-div">
        
    </Link>
  );
}
