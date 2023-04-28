import Image from "next/image";
import { NoticiasItem } from "./NoticiasItem";

export function Noticias() {
  return (
      <div className="flex flex-col items-center w-full h-full">

       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />

      </div>
  );
}
