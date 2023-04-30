import Link from "next/link";

export function Navegacao() {
  return (
    <div className="bg-color-bg w-full p-1 mb-40 top-0 fixed z-10">
      <div className="text-center">
        <Link href="/">
          <h2 className="font-bold">Home</h2>
        </Link>
      </div>
    </div>
  );
}
