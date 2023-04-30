import Link from "next/link";

export function Navegacao() {
  return (
    <div className="bg-color-footer text-color-text justify-center text-center align-middle p-1 mb-40 top-0 fixed z-10 border-b border-black mx-40">
      <div className="text-center">
        <Link href="/">
          <h2 className="font-bold">Home</h2>
        </Link>
      </div>
    </div>
  );
}
