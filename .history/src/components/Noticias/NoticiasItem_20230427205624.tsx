import Image from "next/image";
import Link from "next/link";

export function NoticiasItem() {
  return (
    <Link href={"NoticiaGrande"}>
    <div className="bg-gray-500 my-3 items-center flex flex-row h-32 w-screen">
      <div className="h-full w-2/5 border-blue-200 bg-green-300 relative overflow-hidden">
        <Image
          src="/vert.jpg"
          alt="Minha imagem"
          fill
          style={{ objectFit: 'cover' }} // object-fit: "contain"
        />
      </div>
      <div className="h-full w-3/5 px-6 py-3 overflow-hidden flex">
        <h2 className="text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum vitae dolorum officia</h2>
        <p className="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit enim voluptates, repellat necessitatibus et ipsam fugit, officiis pariatur incidunt aliquid corrupti delectus repellendus? Unde minima reprehenderit consequuntur odio quos.</p>
      </div>
    </div>
    </Link>
  );
}
