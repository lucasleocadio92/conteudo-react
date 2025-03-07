import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const ContadorContext = createContext();

export const useContador = () => useContext(ContadorContext);

export const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  return (
    <ContadorContext.Provider value={{ contador, setContador }}>
      {children}
    </ContadorContext.Provider>
  );
};
`;
const codigoEx2 = `import React from 'react';
import { useContador } from './ContadorContext';

const ContadorExibicao = () => {
  const { contador, setContador } = useContador();

  return (
    <div>
      <p>Contagem Global: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
    </div>
  );
};

export default ContadorExibicao;
`;
const codigoEx3 = `import React from 'react';
import { ContadorProvider } from './ContadorContext';
import ContadorExibicao from './ContadorExibicao';

const App = () => {
  return (
    <ContadorProvider>
      <ContadorExibicao />
    </ContadorProvider>
  );
};

export default App;
`;

function ContextApi(){
    return(
    <>
        <h2 className="mb-4">Context API</h2>
        <p>A <b>Context API</b> é uma maneira de compartilhar dados (ou seja, o state) entre vários componentes sem precisar passar esses dados manualmente por props de um componente para outro. Isso é útil quando você tem dados que precisam ser acessados por muitos componentes ao longo da aplicação.</p>

        <h4>Passo 1</h4>
        <p>Criar o contexto.</p>
        <CodeBlock codigo={codigoEx1} />

        <h4>Passo 2</h4>
        <p>Consumir o contexto nos componentes.</p>
        <CodeBlock codigo={codigoEx2} />
        <p>Neste exemplo, o <code>Pai</code> ainda passa o valor para o <code>Filho</code>, mas agora a prop passa primeiro pelo componente <code>Intermediario</code>. Esse tipo de estrutura pode ocorrer quando você tem vários níveis de componentes, e nem sempre o intermediário faz algo além de repassar a prop.</p>
        
        <h4>Passo 3</h4>
        <p>Envolver os componentes com o <code>ContadorProvider</code>.</p>
        <CodeBlock codigo={codigoEx3} />

        <h6>Explicação:</h6>
        <p>- <code>ContadorContext</code> é criado com <code>createContext()</code>.</p>
        <p>- <code>ContadorProvider</code> fornece o estado <code>contador</code> para todos os componentes dentro do seu escopo.</p>
        <p>- <code>useContador</code> é um hook customizado para consumir o contexto.</p>
    </>)
}

export default ContextApi;