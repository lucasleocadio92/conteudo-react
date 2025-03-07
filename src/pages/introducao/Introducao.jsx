import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `const elemento = <h1>Olá, Mundo!</h1>`;
const codigoEx2 = `const Saudacao = ({ props }) => {
  return <h1>Olá, {props.nome}!</h1>;
};`;
const codigoEx3 = `import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;`;
const codigoEx4 = `import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;`;
const codigoEx5 = `npx create-react-app meu-app
cd meu-app
npm start`;
const codigoEx6 = `meu-app/
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
└── package.json`;

function Introducao(){
    return(
    <>
        <h2 className="mb-4">Introdução ao React</h2>
        <p>React é uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário, principalmente para aplicações web de página única (SPA, ou Single Page Applications). Foi criada pelo Facebook em 2011 e, desde então, tornou-se uma das bibliotecas mais populares para o desenvolvimento front-end.</p>
        
        <h4>Principais Conceitos do React</h4>
        <p>Aqui estão os conceitos fundamentais que você precisa entender para começar com o React:</p>

        <h5>1. Componentes</h5>
        <p>Os componentes são a base do React. Eles permitem dividir a interface de usuário (UI) em partes menores e reutilizáveis. Os componentes podem ser funções ou classes e podem ter seus próprios estados e propriedades (props). Cada componente pode representar uma parte da interface, como um botão, uma lista de itens ou uma caixa de texto.</p>

        <h5>2. JSX (JavaScript XML)</h5>
        <p>JSX é uma sintaxe que permite escrever HTML dentro de JavaScript. Com o JSX, você pode combinar estrutura (HTML) e comportamento (JavaScript) no mesmo arquivo, facilitando o desenvolvimento. O JSX é compilado para chamadas JavaScript.</p>
        <CodeBlock codigo={codigoEx1} />

        <h5>3. Props (Propriedades)</h5>
        <p><em>Props</em> são os dados passados de um componente pai para um componente filho. Elas são imutáveis dentro do componente que as recebe, o que significa que um componente filho não pode modificar as props, apenas usá-las.</p>
        <CodeBlock codigo={codigoEx2} />

        <h5>4. State (Estado)</h5>
        <p>O <em>state</em> é usado para armazenar dados que podem mudar ao longo do tempo e que afetam a renderização do componente. Em um componente funcional, o estado é gerenciado com o hook <code>useState</code>.</p>
        <CodeBlock codigo={codigoEx3} />

        <h5>5. Ciclo de Vida (Life Cycle)</h5>
        <p>Os componentes de classe em React têm métodos de ciclo de vida, que permitem executar código em momentos específicos durante a vida útil do componente (por exemplo, quando ele é montado ou atualizado). Com os hooks, os componentes funcionais também podem realizar tarefas de ciclo de vida, como o <code>useEffect</code>.</p>

        <h5>6. Hooks</h5>
        <p>Os hooks são funções introduzidas no React 16.8 que permitem adicionar estado e outras funcionalidades a componentes funcionais. Os hooks mais comuns são:</p>
        <ul>
            <li><code>useState</code>: Para adicionar estado a um componente funcional.</li>
            <li><code>useEffect</code>: Para executar efeitos colaterais, como chamadas de API ou manipulação de eventos.</li>
            <li><code>useContext</code>: Para acessar o contexto do React em componentes funcionais.</li>
        </ul>

        <h4>Exemplo Básico de um Componente React</h4>
        <p>Aqui está um exemplo simples de um componente funcional que exibe um contador e tem um botão para incrementar esse valor:</p>
        <CodeBlock codigo={codigoEx4} />

        <h4>Como Funciona o React?</h4>
        <p>1. <strong>Renderização</strong>: Quando o estado ou as props de um componente mudam, o React atualiza a UI de forma eficiente. Ele realiza a renderização do componente e suas partes afetadas, em vez de atualizar toda a página.</p>
        <p>2. <strong>Virtual DOM</strong>: O React usa um conceito chamado <em>Virtual DOM</em> (DOM Virtual). Quando algo muda no estado ou nas props, o React cria uma versão virtual do DOM, compara com a versão anterior e, depois, atualiza apenas as partes da UI que mudaram, melhorando o desempenho.</p>
        <p>3. <strong>Unidirecionalidade de Dados</strong>: O React adota um fluxo de dados unidirecional. As props são passadas de um componente pai para um componente filho, o que torna o gerenciamento de dados mais previsível.</p>

        <h4>Como Começar com React?</h4>
        <p>1. <strong>Instalação</strong>: Para começar a usar o React, você pode usar o <code>create-react-app</code>, uma ferramenta oficial do React para inicializar rapidamente um novo projeto.</p>
        <CodeBlock codigo={codigoEx5} />

        <p>Isso cria um novo projeto React e inicia um servidor de desenvolvimento para visualizar sua aplicação no navegador.</p>

        <p>2. <strong>Estrutura do Projeto</strong>: O <code>create-react-app</code> cria a seguinte estrutura básica de pastas:</p>
        <CodeBlock codigo={codigoEx6} />

        <p>3. <strong>Próximos Passos</strong>: Explore os hooks como <code>useState</code> e <code>useEffect</code>, aprenda sobre o gerenciamento de estado global com Context API ou bibliotecas como Redux e experimente criar componentes reutilizáveis e integrá-los para construir interfaces mais complexas.</p>

        <h4>Conclusão</h4>
        <p>React é uma poderosa biblioteca para criar interfaces de usuário modernas e dinâmicas. Com seus componentes, JSX, e hooks, ele permite que você desenvolva aplicações de maneira eficiente e escalável. Comece com o básico, pratique e explore as funcionalidades avançadas à medida que avança no aprendizado.</p>
    </>)
}

export default Introducao