import { ReactNode } from 'react';

interface ContadorProps {
  children: ReactNode;
}

export function Contador({ children }: ContadorProps) {
  return (
    <>
      <h1>Contador</h1>
    </>
  );
}
