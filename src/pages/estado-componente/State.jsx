import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { useState } from 'react';

const Contador = () => {
  // Declaração do estado com o valor inicial como 0
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
    </div>
  );
}

export default Contador;
`;
const codigoEx2 = `import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    // Definindo o estado inicial
    this.state = {
      contador: 0
    };
  }

  // Função para aumentar o contador
  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  // Função para diminuir o contador
  diminuirContador = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <p>Contagem: {this.state.contador}</p>
        <button onClick={this.aumentarContador}>Aumentar</button>
        <button onClick={this.diminuirContador}>Diminuir</button>
      </div>
    );
  }
}

export default Contador;
`;

function State(){
    return(
    <>
        <h2 className="mb-4">State (Estado)</h2>
        <p>O <b>state</b> é uma forma de armazenar dados que podem mudar ao longo do tempo em um componente. Esses dados podem ser alterados com base em interações do usuário, como clicar em um botão, preencher um formulário, ou qualquer outra ação.</p>

        <h4>Componente Funcional</h4>
        <p>O hook <code>useState</code> é a maneira mais comum de gerenciar o estado em componentes funcionais. Ele retorna um valor e uma função para atualizar esse valor.</p>
        <CodeBlock codigo={codigoEx1} />
        <h6>Explicação:</h6>
        <p>- <code>contador</code> é o valor do estado.</p>
        <p>- <code>setContador</code> é a função que atualiza o valor do estado.</p>
        <p>- <code>useState(0)</code> inicializa o estado com valor 0.</p>

        <h4>Componentes de Classe</h4>
        <p>Antes do hook <code>useState</code>, a maneira de definir e gerenciar o estado em componentes funcionais era através de componentes de classe.</p>
        <CodeBlock codigo={codigoEx2} />
        <h6>Explicação:</h6>
        <p>- O estado é armazenado em <code>this.state</code> dentro do construtor.</p>
        <p>- A atualização do estado é feita com <code>this.setState()</code>.</p>
    </>)
}

export default State;