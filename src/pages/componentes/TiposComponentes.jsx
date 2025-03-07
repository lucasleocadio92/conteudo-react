import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React from 'react';

function Saudacao () {
  return <h1>Olá, seja bem-vindo ao React!</h1>;
}

export default Saudacao;`;
const codigoEx2 = `import React from 'react';

const Saudacao = () => {
  return <h1>Olá, seja bem-vindo ao React!</h1>;
}

export default Saudacao;`;
const codigoEx3 = `import React, { Component } from 'react';

class Saudacao extends Component {
  render() {
    return <h1>Olá, seja bem-vindo ao React!</h1>;
  }
}

export default Saudacao;`;

function TiposComponentes(){
    return(
    <>
        <h2 className="mb-4">Tipos de Componentes</h2>

        <h4>Componentes Funcionais</h4>
        <p>São componentes definidos por funções. Com a introdução dos Hooks, componentes funcionais se tornaram a forma preferida de escrever componentes no React.</p>
        <CodeBlock codigo={codigoEx1} />
        <CodeBlock codigo={codigoEx2} />
        <p>Aqui, o componente <code>Saudacao</code> é uma função simples que retorna um título.</p>
        
        <h4>Componentes de Classe</h4>
        <p>O React usa um conceito chamado <em>Virtual DOM</em> (DOM Virtual). Quando algo muda no estado ou nas props, o React cria uma versão virtual do DOM, compara com a versão anterior e, depois, atualiza apenas as partes da UI que mudaram, melhorando o desempenho.</p>
        <CodeBlock codigo={codigoEx3} />
    </>)
}

export default TiposComponentes;