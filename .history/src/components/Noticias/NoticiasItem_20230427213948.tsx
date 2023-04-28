import Image from "next/image";
import Link from "next/link";

export function NoticiasItem() {
  return (
    <Link href={"NoticiaGrande"}>
    <div className="bg-gray-500 my-3 items-center flex flex-row h-32 mx-3 max-w-8xl">
      <div className="h-full w-2/6 border-blue-200 bg-green-300 relative overflow-hidden">
        <Image
          src="/vert.jpg"
          alt="Minha imagem"
          fill
          style={{ objectFit: 'cover' }} // object-fit: "contain"
        />
      </div>
      <div className="h-full w-4/6 px-6 border-8 border-gray-500 by-5 overflow-hidden flex flex-col relative">
        <h2 className="text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum vitae dolorum officia</h2>
        <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit enim voluptates, repellat necessitatibus et ipsam fugit, officiis pariatur incidunt aliquid corrupti delectus repellendus? Unde minima reprehenderit consequuntur odio quos.</p>
      </div>
    </div>
    </Link>
  );
}
