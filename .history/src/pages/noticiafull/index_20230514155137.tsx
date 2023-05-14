import Image from "next/image";

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

function NoticiaFull({ title, type, slug, img }: ProjetoProps) {

  return (
    <div className='bg-color-bg bg-center bg-cover bg-no-repeat mt-1 min-h-screen items-center flex flex-col'>

      <div className="bg-color-bg2 items-center flex flex-col w-full max-w-5xl">
        <div className="h-96 w-full border-color-bg2 bg-green-300 relative overflow-hidden">
          <Image
            src="/vert.jpg"
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-auto py-6 mx-3 px-6 flex flex-col relative">
          <h1 className="font-medium pb-20 text-xl">{title}</h1>
          <p>{type}</p>
        </div>
      </div>

    </div>
  )
}

export default NoticiaFull;
