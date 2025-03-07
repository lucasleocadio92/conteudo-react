import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React from 'react';

// Componente Filho
const Filho = ({ valor }) => {
  return <div>O valor passado pelo pai é: {valor}</div>;
};

// Componente Pai
const Pai = () => {
  const valor = "Olá, sou um valor!";
  return <Filho valor={valor} />;
};

export default Pai;
`;
const codigoEx2 = `import React from 'react';

// Componente Filho
const Filho = ({ valor }) => {
  return <div>O valor passado pelo pai é: {valor}</div>;
};

// Componente Intermediário
const Intermediario = ({ valor }) => {
  return <Filho valor={valor} />;
};

// Componente Pai
const Pai = () => {
  const valor = "Olá, sou um valor!";
  return <Intermediario valor={valor} />;
};

export default Pai;
`;
const codigoEx3 = `{/* Componente Pai */}
const ComponentePai = () => {
    const saudacao = () => {
        alert("Saudação do Componente Pai!");
    };
    return (
        <div>
            <h1>Componente Pai</h1>
            <ComponenteFilho chamada={saudacao} />
        </div>
    );
};

{/* Componente Filho */}
const ComponenteFilho = (props) => {
    return (
        <div>
            <h2>Componente Filho</h2>
            <button onClick={props.chamada}>Clique para Saudação</button>
        </div>
    );
};`;
const codigoEx4 = `{/* Componente Pai */}
const ComponentePai = () => {
    const usuario = { nome: "João", idade: 25 };
    return (
        <div>
            <h1>Componente Pai</h1>
            <ComponenteFilho {...usuario} />
        </div>
    );
};

{/* Componente Filho */}
const ComponenteFilho = ({ nome, idade }) => {
    return (
        <div>
            <h2>Componente Filho</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
        </div>
    );
};`;

function Props(){
    return(
    <>
        <h2 className="mb-4">Props</h2>
        <p>Em React, a comunicação entre componentes é feita por meio de props (propriedades). Props permitem que um componente "pai" passe dados para seus componentes "filhos". Vamos ver alguns exemplos práticos de como isso funciona.</p>

        <h4>Direta</h4>
        <p>O componente pai passa dados para o componente filho através de <code>props</code>.</p>
        <CodeBlock codigo={codigoEx1} />
        <p>Neste exemplo, o componente <code>Pai</code> passa a string <code>"Olá, sou um valor!"</code> para o componente <code>Filho</code> por meio da prop <code>valor</code>. O <code>Filho</code> então renderiza essa informação.</p>

        <h4>Indireta</h4>
        <p>Quando você tem componentes intermediários, você pode passar as props do componente pai para o filho, e o componente intermediário apenas repassa esses dados.</p>
        <CodeBlock codigo={codigoEx2} />
        <p>Neste exemplo, o <code>Pai</code> ainda passa o valor para o <code>Filho</code>, mas agora a prop passa primeiro pelo componente <code>Intermediario</code>. Esse tipo de estrutura pode ocorrer quando você tem vários níveis de componentes, e nem sempre o intermediário faz algo além de repassar a prop.</p>
        
        <h4>Funções</h4>
        <p>Além de passar dados, podemos passar funções como props. Isso permite que o componente filho execute ações no componente pai. Veja o exemplo abaixo:</p>
        <CodeBlock codigo={codigoEx3} />
        <p>Neste exemplo, o <code>ComponentePai</code> passa a função <code>saudacao</code>, para o <code>ComponenteFilho</code>. O componente filho, ao clicar no botão, executa a função, o que resulta em uma mensagem de saudação sendo exibida.</p>

        <h4>Desestruturação das Props</h4>
        <p>Podemos usar a desestruturação diretamente nas props para tornar o código mais limpo. Em vez de acessar as props via props.nome, podemos desestruturar diretamente o valor dentro do componente.</p>
        <CodeBlock codigo={codigoEx4} />
        <p>Neste exemplo, o <code>ComponentePai</code> passa a objeto <code>usuario</code>com nome e idade. No <code>ComponenteFilho</code>, utilizamos a desestruturação das props para acessar diretamente o nome e a idade, tornando o código mais simples e legível.</p>
    </>)
}

export default Props;