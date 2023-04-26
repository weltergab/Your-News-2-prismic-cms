import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export function Header() {
  return (
    <>
      <h1>Header</h1>
    </>
  );
}
