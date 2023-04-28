import Image from "next/image";
import Link from "next/link";

export function NoticiasItem() {
  return (
    <Link href={"www.google.com.br"}>
    <div className="bg-gray-500 my-3 items-center flex flex-row h-32 w-screen">
      <div className="h-full w-2/5 border-blue-200 bg-green-300 relative overflow-hidden">
        <Image
          src="/vert.jpg"
          alt="Minha imagem"
          fill
          style={{ objectFit: 'cover' }} // object-fit: "contain"
        />
      </div>
      <div className="h-full w-3/5 px-6 py-2 overflow-hidden">
        <h2 className="font-bold text-white justify-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
      </div>
    </div>
    </Link>
  );
}
