import Image from "next/image";
import { NoticiasItem } from "./NoticiasItem";

export function Noticias() {
  return (
      <div className="flex flex-col items-center sm:w-5/6 sm:h-2/6">

       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />

      </div>
  );
}
