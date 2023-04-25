import { ReactNode } from 'react';

interface ContadorProps {
  children: ReactNode;
}

export function Contador() {
  return (
    <>
      <h1>Contador</h1>
      <div>0</div>
      <button>Adicionar</button>
    </>
  );
}
