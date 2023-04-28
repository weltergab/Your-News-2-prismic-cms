import Image from "next/image";

function NoticiaFull() {

  return (
    <div className='bg-blue-700 bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col'>

      <h1>Noticia Full</h1>
      <div className="bg-gray-500 items-center flex flex-col mt-8 h-32 md:h-40 mx-3 max-w-4xl">
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

    </div>
  )
}

export default NoticiaFull;
