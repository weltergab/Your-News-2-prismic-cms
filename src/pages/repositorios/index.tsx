import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  favorite: boolean;
}

export default function Repositorios() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  // useEffect executa uma função, sempre que tal variavel for alterada
  // recebe 2 parametros, a função e a variavel
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/weltergab/repos");
      const data: Repository[] = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`
  }, [repositories])

  function handleFavorite(id: number) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });
    setRepositories(newRepositories);
  }
  /*
  Você da um .map() em um array. Ele chama uma função para cada elemento do array.
  O (repo) é o elemento atual. 
  function renderRepository(repo) {
    return <li key={repo.id}>{repo.name}</li>;
  }
  */
  return (
    <>
      <h1>Repositórios</h1>
      <p>Utilizei useEffect e useState e linkei com a api do github para trazer meus repositórios públicos</p>
      <p>O título da aba é alterado com a quantidade de repositorios favoritos sem recaregar a página.</p>
      <ul>
        {/* {repositories.map(renderRepository)} */}

        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
