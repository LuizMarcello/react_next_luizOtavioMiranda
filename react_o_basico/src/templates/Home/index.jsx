import { React, useState, useEffect, useCallback } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load.posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  // state = {
  //   posts: [],
  //   allPosts: [],
  //   page: 0,
  //   postsPerPage: 2,
  //   searchValue: '',
  // };

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setpostsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  // const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

  /* Verifica se todos os posts já foram carregados */
  const noMorePosts = page + postsPerPage >= allPosts.length;

  {/* Duas exclamações(dupla negação) converte para booleano */ }
  {/* Se houver texto no campo de busca, filtra os posts */ }
  {/* Se não houver texto no campo de busca, exibe todos os posts */ }
  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) : posts;



  /* Método que carrega os posts da API */
  /* Utiliza a função loadPosts importada do utils */
  /* Atualiza o estado do componente com os posts carregados */
  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  /* Este hook (useEffect()) é usado para componentDidMount(),
       componentDidUpdate() e componentWillUnmount() */
  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <section className="container">
      <div className="search-container">
        {/* Duas exclamações(dupla negação) converte para booleano */}
        {/* Isso é Curto-circuito(short circuit) */}
        {/* Se a primeira condição for verdadeira, renderiza o conteúdo após o &&
          Se for falsa, não renderiza nada */}
        {!!searchValue && (
          <>
            <h2>Search value: {searchValue}</h2>
          </>
        )}

        <TextInput
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </div>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && (
        <p>Nenhum post encontrado</p>
      )}

      <div className="button-container">
        {/* O botão só aparece quando NÃO há texto no campo de busca */}
        {/* Isso é Curto-circuito(short-circuit) */}
        {!searchValue && (
          <Button text="Carregar mais posts"
            onnClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
}



/* Este é um Componente de classe */
// class Home2 extends Component {

//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 2,
//     searchValue: '',
//   };

//   /* Método de lifecycle que é chamado quando o componente é montado */
//   /* É executado após o componente ser inserido no DOM */
//   /* Útil para requisições iniciais de dados, subscrições ou manipulações do DOM */
//   async componentDidMount() {
//     await this.loadPosts();
//   };

//   /* Método que carrega os posts da API */
//   /* Utiliza a função loadPosts importada do utils */
//   /* Atualiza o estado do componente com os posts carregados */
//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     })
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);
//     this.setState({ posts, page: nextPage });
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   }

//   componentDidUpdate() {
//   }

//   componentWillUnmount() {
//   }

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

//     /* Verifica se todos os posts já foram carregados */
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     {/* Duas exclamações(dupla negação) converte para booleano */ }
//     {/* Se houver texto no campo de busca, filtra os posts */ }
//     {/* Se não houver texto no campo de busca, exibe todos os posts */ }
//     const filteredPosts = !!searchValue ? allPosts.filter(post => {
//       return post.title.toLowerCase().includes(searchValue.toLowerCase());
//     }) : posts;

//     return (
//       <section className="container">
//         <div className="search-container">
//           {/* Duas exclamações(dupla negação) converte para booleano */}
//           {/* Isso é Curto-circuito(short circuit) */}
//           {/* Se a primeira condição for verdadeira, renderiza o conteúdo após o &&
//             Se for falsa, não renderiza nada */}
//           {!!searchValue && (
//             <>
//               <h2>Search value: {searchValue}</h2>
//             </>
//           )}

//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <p>Nenhum post encontrado</p>
//         )}

//         <div className="button-container">
//           {/* O botão só aparece quando NÃO há texto no campo de busca */}
//           {/* Isso é Curto-circuito(short-circuit) */}
//           {!searchValue && (
//             <Button text="Carregar mais posts"
//               onnClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

export default Home



