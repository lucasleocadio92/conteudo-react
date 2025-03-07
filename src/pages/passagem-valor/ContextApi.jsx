import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { createContext, useContext } from 'react';

// Criando o Contexto
const ValorContexto = createContext();

// Componente Pai (Provider)
const Pai = () => {
  const valor = "Valor do Contexto";

  return (
    <ValorContexto.Provider value={valor}>
      <Filho />
    </ValorContexto.Provider>
  );
};

// Componente Filho (Consumer)
const Filho = () => {
  // Usando useContext para acessar o valor do contexto
  const valorDoContexto = useContext(ValorContexto);

  return <h1>O valor do contexto é: {valorDoContexto}</h1>;
};

export default Pai;
`;
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

function ContextApi(){
    return(
    <>
        <h2 className="mb-4">Context API</h2>
        <p>A Context API é uma forma de compartilhar valores (como strings, objetos, etc.) entre múltiplos componentes, sem precisar passar explicitamente props para cada nível da árvore. No entanto, vale notar que o Context pode ser combinado com controle de estado, mas também pode ser usado sem ele.</p>

        <h5>1. Criar o Contexto:</h5>
        <p>Primeiro, criamos um contexto usando <code>React.createContext()</code>.</p>
        <h5>2. Provider:</h5>
        <p>O  <code>Provider</code> é usado no componente pai para disponibilizar o valor a ser acessado pelos filhos.</p>
        <h5>3. Consumer:</h5>
        <p>O  <code>Consumer</code> ou o <code>useContext</code> permite acessar o valor do contexto em um componente filho.</p>
        <CodeBlock codigo={codigoEx1} />

        <h4>Explicação:</h4>
        <p>- <code>createContext()</code> cria um contexto onde você pode armazenar um valor.</p>
        <p>- O <code>Provider</code> no componente <code>Pai</code> envolve o componente <code>Filho</code> e fornece o valor (<code>"Valor do Contexto</code>) que pode ser acessado por qualquer componente descendente que consumir o contexto</p>
        <p>- O <code>useContext(ValorContexto)</code> no componente. <code>Filho</code> onsome o valor do contexto, permitindo o acesso sem passar explicitamente as props entre os componentes intermediários</p>

        <h5>Por que isso não envolve controle de estado?</h5>
        <p>Nesse caso, não há manipulação do valor usando hooks de estado (como <code>useState</code>). O valor no <code>Context</code> é passado diretamente do <code>Provider</code> para o consumidor, e o valor não é alterado diretamente pelo componente. Não há interatividade, apenas a passagem do dado.</p>
    </>)
}

export default ContextApi;