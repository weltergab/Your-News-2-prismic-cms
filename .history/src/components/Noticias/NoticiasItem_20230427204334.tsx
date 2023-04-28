import Image from "next/image";

export function NoticiasItem() {
  return (
    <div className="bg-gray-500 my-3 items-center flex flex-row h-32 w-screen">
      <div className="h-full w-2/5 border-blue-200 bg-green-300 relative overflow-hidden">
        <Image
          src="/vert.jpg"
          alt="Minha imagem"
          fill
          style={{ objectFit: 'cover' }} // object-fit: "contain"
        />
      </div>
      <div className="h-full w-3/5 px-6 py-2 overflow-hidden justify-center">
        <h2 className="font-bold text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
      </div>
    </div>
  );
}
