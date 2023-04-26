import Image from "next/image";

export function Noticias() {
  return (
    <>
      <div className="flex flex-col items-center">

        <div className="bg-gray-500 p-8 m-8 justify-center items-center
                        flex flex-row h-screen sm:h-64 sm:flex-col">

          <div className="w-screen sm:w-2/5 h-full border-blue-200 border bg-green-300 relative overflow-hidden">
            <Image
              src="/vert.jpg"
              alt="Minha imagem"
              fill
              style={{ objectFit: 'cover' }} // object-fit: "contain"
            />
          </div>
          <div className="w-screen sm:w-3/5 p-8">
            <h1>Noticias max 5 palavras</h1>
            <h2 className="font-bold">Sub</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, minus! Quidem rerum iure a cumque unde ducimus exercitationem laudantium. Laboriosam non voluptatem, fuga atque repudiandae quibusdam eius necessitatibus eligendi reprehenderit!</p>
          </div>

        </div>

        <div className="bg-gray-500 max-w-7xl h-64 p-8 m-8 justify-center items-center flex flex-row">

          <div className="w-2/5 h-full border-blue-200 border bg-green-300 relative overflow-hidden">

            <Image
              src="/horiz.jpg"
              alt="Minha imagem"
              fill
              style={{ objectFit: 'cover' }} // object-fit: "contain"
            />

          </div>
          <div className="w-3/5 p-8">
            <h1>Noticias max 5 palavras</h1>
            <h2 className="font-bold">Sub</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, minus! Quidem rerum iure a cumque unde ducimus exercitationem laudantium. Laboriosam non voluptatem, fuga atque repudiandae quibusdam eius necessitatibus eligendi reprehenderit!</p>
          </div>

        </div>



      </div>
    </>
  );
}
