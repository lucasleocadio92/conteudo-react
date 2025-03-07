import CodeBlock from "../../components/code-block/CodeBlock"
import './Hooks.css'

const codigoEx1 = `import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clicar
      </button>
    </div>
  );
}

export default Contador;
`;
const codigoEx2 = `import React, { useState, useEffect } from 'react';

function Exemplo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.exemplo.com/dados')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // O efeito só será executado uma vez, quando o componente for montado.

  return <div>{data ? <pre>{JSON.stringify(data)}</pre> : 'Carregando...'}</div>;
}

export default Exemplo;
`;
const codigoEx3 = `import React, { useContext } from 'react';

const TemaContext = React.createContext('light');

function Componente() {
  const tema = useContext(TemaContext);
  return <div>O tema atual é {tema}</div>;
}

export default Componente;
`;
const codigoEx4 = `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}

export default Contador;
`;
const codigoEx5 = `import React, { useState, useCallback } from 'react';

function Botao({ onClick }) {
  console.log('Botão renderizado');
  return <button onClick={onClick}>Clique aqui</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Botao onClick={memoizedClick} />
      <p>Você clicou {count} vezes</p>
    </div>
  );
}

export default App;
`;
const codigoEx6 = `import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Calculando...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Resultado da conta cara: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
`;
const codigoEx7 = `import React, { useRef } from 'react';

function Foco() {
  const inputRef = useRef(null);

  const focarNoInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focarNoInput}>Focar no input</button>
    </div>
  );
}

export default Foco;
`;
const codigoEx8 = `import React, { useLayoutEffect, useState } from 'react';

function LayoutEffect() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <div>Width da janela: {width}</div>;
}

export default LayoutEffect;
`;
const codigoEx9 = `import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const ComponenteFilho = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} />;
});

function ComponentePai() {
  const filhoRef = useRef();

  const focarNoFilho = () => {
    filhoRef.current.focus();
  };

  return (
    <div>
      <ComponenteFilho ref={filhoRef} />
      <button onClick={focarNoFilho}>Focar no input do filho</button>
    </div>
  );
}

export default ComponentePai;
`;

function Hooks(){
    return(
    <>
        <h2 className="mb-4">Hooks</h2>
        <p>Os <b>Hooks</b> no React são funções que permitem "ligar" (ou "hook up") o estado e outros recursos do React a componentes funcionais. Antes dos hooks, o estado e o ciclo de vida só podiam ser usados em <b>componentes de classe</b>, mas com os hooks, é possível usar esses recursos em <b>componentes funcionais</b>, proporcionando uma maneira mais simples e concisa de escrever componentes.</p>
        <p>Os hooks foram introduzidos no React 16.8 e permitem que você use estado, efeitos colaterais, contexto e outras funcionalidades de forma mais modular e reutilizável.</p>
        
        <h4>Tipos de Hooks</h4>
        <ul className="tipos-hooks">
            <li><b>useState</b>: Para adicionar estado a componentes funcionais.</li>
            <li><b>useEffect</b>: Para lidar com efeitos colaterais, como chamadas API ou atualizações de DOM.</li>
            <li><b>useContext</b>: Para consumir contexto de um provider.</li>
            <li><b>useReducer</b>: Para gerenciar estado mais complexo (alternativa ao useState).</li>
            <li><b>useCallback</b>: Para memoizar funções.</li>
            <li><b>useMemo</b>: Para memoizar valores calculados.</li>
            <li><b>useRef</b>: Para acessar e manipular diretamente um elemento DOM ou manter um valor mutável.</li>
            <li><b>useLayoutEffect</b>: Semelhante ao <code>useEffect</code>, mas é sincronizado com o layout da tela.</li>
            <li><b>useImperativeHandle</b>: Para expor valores e métodos para o componente pai, quando usado com <code>React.forwardRef</code>.</li>
        </ul>
        <p>Agora, vamos ver exemplos de cada um desses hooks.</p>

        <h5>1. useState</h5>
        <p>O <code>useState</code> é o hook que permite adicionar estado a componentes funcionais.</p>
        <CodeBlock codigo={codigoEx1} />

        <h5>2. useEffect</h5>
        <p>O <code>useEffect</code> é usado para efeitos colaterais, como manipulação de API, atualizações de DOM, etc.</p>
        <CodeBlock codigo={codigoEx2} />
        
        <h5>3. useContext</h5>
        <p>O <code>useContext</code> é utilizado para acessar o valor de um contexto.</p>
        <CodeBlock codigo={codigoEx3} />

        <h5>4. useReducer</h5>
        <p>O <code>useReducer</code> é útil quando o estado é complexo e envolve múltiplos valores ou ações.</p>
        <CodeBlock codigo={codigoEx4} />

        <h5>5. useCallback</h5>
        <p>O <code>useCallback</code> retorna uma função memorizada, evitando que ela seja recriada em cada renderização.</p>
        <CodeBlock codigo={codigoEx5} />

        <h5>6. useMemo</h5>
        <p>O <code>useMemo</code> memoiza valores computados para evitar cálculos desnecessários.</p>
        <CodeBlock codigo={codigoEx6} />

        <h5>7. useRef</h5>
        <p>O <code>useRef</code> pode ser usado para acessar diretamente um elemento DOM ou manter valores persistentes entre renderizações.</p>
        <CodeBlock codigo={codigoEx7} />

        <h5>8. useLayoutEffect</h5>
        <p>Semelhante ao <code>useEffect</code>, mas executado de forma síncrona após as mudanças no DOM. Ideal para modificações de layout.</p>
        <CodeBlock codigo={codigoEx8} />

        <h5>9. useImperativeHandle</h5>
        <p>Usado junto com <code>forwardRef</code> para expor métodos específicos para o componente pai.</p>
        <CodeBlock codigo={codigoEx9} />
    </>)
}

export default Hooks;