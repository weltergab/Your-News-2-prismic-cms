import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import { Contador } from '@/components/Contador'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-blur bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col'>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>

      <Contador />

      

      <Link href="/tempo">
        Tempo
      </Link>

      <Link href="/repositorios">
        Repositórios
      </Link>
    </div>
  )
}
