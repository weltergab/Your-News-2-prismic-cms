import { useState } from 'react';


export function Contador() {
  const [num, setNum] = useState(0);
  function Adicionar(){
    setNum(num+1)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>Utilizando useState</p>
      <div>{num}</div>
      <button onClick={Adicionar}>Adicionar</button>
    </>
  );
}
