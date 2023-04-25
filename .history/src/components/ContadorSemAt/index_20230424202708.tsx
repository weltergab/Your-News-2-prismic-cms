export function ContadorSemAt() {
  let num = 0
  function Adicionar(){
    num += 1
  }

  return (
    <>
      <h1>Contador sem atualizar interface</h1>
      <p>Você pode inspecionar o console do navegador e ver que a variavel está mudando</p>
      <div>{num}</div>
      <button onClick={Adicionar}>Adicionar</button>
    </>
  );
}
