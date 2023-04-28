import Image from "next/image";
import { NoticiasItem } from "./NoticiasItem";

export function Noticias() {
  return (
      <div className="flex flex-col items-center mb-32">

       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       <NoticiasItem />
       

      </div>
  );
}
