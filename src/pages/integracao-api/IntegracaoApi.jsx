import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fazendo uma requisição GET para uma API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Erro na requisição:', error));
  }, []);
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
`;
const codigoEx2 = `import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fazendo uma requisição GET com axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Erro na requisição:', error));
  }, []);
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
`;
const codigoEx3 = `npm install react-query
`;
const codigoEx4 = `import React from 'react';
import { useQuery } from 'react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Erro na requisição');
  return res.json();
}

function App() {
  const { data, error, isLoading } = useQuery('posts', fetchPosts);
  
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
`;

function IntegracaoApi(){
    return(
    <>
        <h2 className="mb-4">Integração com APIs</h2>
        <p>A integração com APIs em React é uma prática fundamental para permitir que o seu aplicativo interaja com dados e funcionalidades externas. Em React, a integração com APIs pode ser realizada de diversas maneiras, dependendo da complexidade e da necessidade do seu projeto.</p>
        <p>Existem três formas principais de realizar essa integração:</p>
        
        <h5>1. Integração usando <code>fetch</code></h5>
        <p>A maneira mais simples de consumir APIs no React é utilizando a API <code>fetch</code>, que permite fazer requisições HTTP para obter ou enviar dados.</p>
        <p><b>Exemplo de código com</b> <code>fetch</code>:</p>
        <CodeBlock codigo={codigoEx1} />

        <h5>2. Integração usando <code>axios</code></h5>
        <p><code>axios</code> é uma biblioteca popular para fazer requisições HTTP em JavaScript. Ela tem um formato mais conveniente e pode lidar com erros de maneira mais fácil, além de permitir configuração global.</p>
        <p><b>Exemplo de código com</b> <code>axios</code>:</p>
        <CodeBlock codigo={codigoEx2} />

        <h5>3. Integração usando <code>React Query</code></h5>
        <p><code>React Query</code> é uma biblioteca que facilita a integração com APIs, proporcionando cache, gerenciamento de estados e outras funcionalidades úteis para chamadas de APIs de maneira eficiente.</p>
        <p><b>Exemplo de código com</b> <code>React Query</code>:</p>
        <p>Para usar <code>React Query</code>, você precisa instalar a biblioteca primeiro:</p>
        <CodeBlock codigo={codigoEx3} />
        <p>E depois usar o <code>useQuery</code> para buscar dados.</p>
        <CodeBlock codigo={codigoEx4} />

        <h5>Comparação entre os métodos:</h5>
        <ul>
            <li>
                <code>fetch</code>:
                <ul>
                    <li>Simples e nativo do JavaScript.</li>
                    <li>Necessita de tratamento manual de erros e estados de carregamento.</li>
                    <li>Bom para casos simples e rápidos.</li>
                </ul>
            </li>
            <li>
                <code>axios</code>: 
                <ul>
                    <li>Mais poderoso que <code>fetch</code> por fornecer interceptadores de requisições/respostas, tratamento de erros mais robusto e suporte a requisições mais complexas.</li>
                    <li>Menos verboso do que <code>fetch</code>.</li>
                </ul>
            </li>
            <li>
                <code>React Query</code>: 
                <ul>
                    <li>Gerencia de forma eficiente o estado de dados (caching, refetching, etc.).</li>
                    <li>Ideal para projetos maiores que fazem muitas requisições à API e necessitam de funcionalidades adicionais como paginar, refazer a requisição automaticamente ou armazenar em cache.</li>
                </ul>
            </li>
        </ul>

        <h5>Quando usar cada um:</h5>
        <ul>
            <li><b>Use</b> <code>fetch</code> se você estiver criando um projeto simples e não precisa de funcionalidades avançadas como caching ou sincronização de dados em tempo real.</li>
            <li><b>Use</b> <code>axios</code> se você precisar de uma solução mais robusta para lidar com requisições e respostas HTTP de maneira mais eficiente e simples.</li>
            <li><b>Use</b> <code>React Query</code> se você estiver lidando com um projeto grande e complexo, com muitas requisições e que precise de gerenciamento avançado de dados (como caching, re-fetching, e sincronia de estados).</li>
        </ul>
    </>)
}

export default IntegracaoApi