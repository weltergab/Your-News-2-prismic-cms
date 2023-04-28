import Image from "next/image";

export function NoticiasItem() {
  return (
    <div className="bg-gray-500 my-10 sm:m-8 sm:p-8 items-center
                        flex flex-col h-screen sm:h-64 sm:flex-row">
      <div className="w-screen h-full sm:w-2/5 border-blue-200 border bg-green-300 relative overflow-hidden">
        <Image
          src="/vert.jpg"
          alt="Minha imagem"
          fill
          style={{ objectFit: 'cover' }} // object-fit: "contain"
        />
      </div>
      <div className="w-screen h-full sm:w-3/5 p-8">
        <h1 className="text-paleta-400">Noticias max 5 palavras</h1>
        <h2 className="font-bold text-paleta-400">Sub</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, minus! Quidem rerum iure a cumque unde ducimus exercitationem laudantium. Laboriosam non voluptatem, fuga atque repudiandae quibusdam eius necessitatibus eligendi reprehenderit!</p>
      </div>
    </div>
  );
}
