import { ReactNode, useState } from 'react';

interface ContadorProps {
  children: ReactNode;
}


export function Contador() {
  const [num, setNum] = useState(0);
  function Adicionar(){
    setNum(num+1)
  }

  return (
    <>
      <h1>Contador</h1>
      <div>{num}</div>
      <button onClick={Adicionar}>Adicionar</button>
    </>
  );
}
