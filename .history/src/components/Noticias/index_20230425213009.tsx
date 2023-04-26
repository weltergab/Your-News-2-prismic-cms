import { ReactNode } from 'react';

interface NoticiasProps {
  children: ReactNode;
}

export function Noticias({ children }: NoticiasProps) {
  return (
    <>
      <h1>Noticias</h1>
      {children}
    </>
  );
}
