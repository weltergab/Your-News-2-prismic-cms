import Image from "next/image";

function NoticiaFull() {

  return (
    <div className='bg-blue-700 bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col'>

      <h1>Noticia Full</h1>
      <div className="bg-gray-500 items-center flex flex-col mt-8 w-full">
        <div className="h-96 w-full border-blue-200 bg-green-300 relative overflow-hidden">
          <Image
            src="/vert.jpg"
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-auto px-6 flex flex-col relative">
          <h2 className="text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum vitae dolorum officia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit enim voluptates, repellat necessitatibus et ipsam fugit, officiis pariatur incidunt aliquid corrupti delectus repellendus? Unde minima reprehenderit consequuntur odio quos.</p>
        </div>
      </div>

    </div>
  )
}

export default NoticiaFull;
