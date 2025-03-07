import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React from 'react';

const Cabecalho = () => {
  return <h1>Bem-vindo ao meu site</h1>;
}

const Rodape = () => {
  return <footer>© 2025 Todos os direitos reservados</footer>;
}

const App = () => {
  return (
    <div>
      <Cabecalho />
      <p>Conteúdo do site</p>
      <Rodape />
    </div>
  );
}

export default App;`;

function ComposicaoComponentes(){
    return(
    <>
        <h2 className="mb-4">Composição de Componentes</h2>

        <h4>Componentes Funcionais</h4>
        <p>São componentes definidos por funções. Com a introdução dos Hooks, componentes funcionais se tornaram a forma preferida de escrever componentes no React.</p>
        <CodeBlock codigo={codigoEx1} />
        <p>Aqui, o componente <code>App</code> é composto pelos componentes <code>Cabecalho</code> e <code>Rodape</code>.</p>
    </>)
}

export default ComposicaoComponentes;