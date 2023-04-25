export function Contador() {
  let num = 0
  function Adicionar(){
    num += 1
  }

  return (
    <>
      <h1>Contador</h1>
      <div>{num}</div>
      <button onClick={Adicionar}>Adicionar</button>
    </>
  );
}
