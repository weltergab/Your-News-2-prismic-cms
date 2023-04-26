import { ReactNode } from 'react';

interface NavegacaoProps {
  children: ReactNode;
}

export function Navegacao({ children }: NavegacaoProps) {
  return (
    <>
      <h1>Navegacao</h1>
      {children}
    </>
  );
}
