interface TempoProps {
  staticDateString: string;
}

function Tempo(props: TempoProps) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div className="bg-blue-700 bg-center bg-cover bg-no-repeat min-h-screen items-center flex flex-col">
      <div className="w-2/5 m-20 p-20 bg-black-100 text-black-400">
        <h1>getStaticProps é uma função que que permite buscar dados em tempo de compilação e passá-los como props</h1>
        <p>Ao usar o getStaticProps, os dados buscados podem ser pré-renderizados no momento da construção, permitindo que a página seja exibida com conteúdo estático Isso pode melhorar significativamente o desempenho da aplicação, especialmente em páginas com muitos dados ou em aplicações com tráfego intenso.</p>
        <br />
        <div>{dynamicDateString} (dinâmico)</div>
        <div>{props.staticDateString} (estático)</div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps();')
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    },
    revalidate: 86400
  }
}

export default Tempo;
