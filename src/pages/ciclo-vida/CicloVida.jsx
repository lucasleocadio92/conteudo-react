import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor: componente criado');
  }

  // Método chamado antes da renderização (sempre que há uma mudança nas props ou estado)
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: chamando antes da renderização');
    return null;  // Retorna null para não alterar o estado
  }

  // Renderiza a UI
  render() {
    console.log('render: renderizando a UI');
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar
        </button>
      </div>
    );
  }

  // Chamado imediatamente após o componente ser montado no DOM
  componentDidMount() {
    console.log('componentDidMount: componente foi montado');
  }

  // Determina se o componente precisa ser re-renderizado
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: verificando se deve atualizar');
    return true;  // Retorna true para permitir a atualização
  }

  // Chamado antes das mudanças serem aplicadas ao DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: antes de atualizar o DOM');
    return null;
  }

  // Chamado após a atualização do componente no DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: componente foi atualizado');
  }

  // Chamado antes do componente ser desmontado
  componentWillUnmount() {
    console.log('componentWillUnmount: componente será desmontado');
  }
}

export default LifeCycleExample;
`;

function CicloVida(){
    return(
    <>
        <h2 className="mb-4">Ciclo de Vida</h2>
        <p>Em React, o <b>Ciclo de Vida (Life Cycle)</b> refere-se ao conjunto de métodos que são chamados em diferentes momentos da existência de um componente, desde sua criação até sua remoção do DOM. Esses métodos permitem que você execute ações em pontos específicos do ciclo de vida do componente, como inicialização, atualização e destruição.</p>
        
        <h5>1. Fases do Ciclo de Vida</h5>
        <p>O ciclo de vida dos componentes do React pode ser dividido em três fases principais:</p>
        <ul>
            <li><b>Montagem (Mounting)</b>: Quando o componente é criado e inserido no DOM.</li>
            <li><b>Atualização (Updating)</b>: Quando o estado ou as propriedades do componente são alterados e ele precisa ser re-renderizado.</li>
            <li><b>Desmontagem (Unmounting)</b>: Quando o componente é removido do DOM.</li>
        </ul>

        <h5>2. Tipos de Métodos do Ciclo de Vida</h5>
        <h6><b>Fase de Montagem:</b></h6>
        <p>Esses métodos são chamados quando o componente está sendo criado e inserido no DOM.</p>
        <ul>
            <li><code>constructor()</code>: Chamado antes do componente ser montado. Usado para inicializar o estado ou vincular métodos.</li>
            <li><code>static getDerivedStateFromProps()</code>: Chamado antes de cada renderização, tanto na montagem quanto nas atualizações.</li>
            <li><code>render()</code>: Método obrigatório, responsável por renderizar a UI.</li>
            <li><code>componentDidMount()</code>: Chamado imediatamente após o componente ser montado (inserido no DOM).</li>
        </ul>

        <h6><b>Fase de Atualização:</b></h6>
        <p>Esses métodos são chamados quando o estado ou as propriedades do componente mudam.</p>
        <ul>
            <li><code>static getDerivedStateFromProps()</code>: Como mencionado antes, é chamado durante a montagem e atualizações.</li>
            <li><code>shouldComponentUpdate()</code>: Determina se o componente precisa ser re-renderizado.</li>
            <li><code>render()</code>: Novamente, chamado sempre que o componente precisa ser re-renderizado.</li>
            <li><code>getSnapshotBeforeUpdate()</code>: Chamado imediatamente antes das mudanças no DOM serem aplicadas.</li>
            <li><code>componentDidUpdate()</code>: Chamado após a atualização do componente no DOM.</li>
        </ul>

        <h6><b>Fase de Desmontagem:</b></h6>
        <p>Esses métodos são chamados quando o componente está sendo removido do DOM.</p>
        <ul>
            <li><code>componentWillUnmount()</code>: Chamado antes do componente ser desmontado e removido do DOM.</li>
        </ul>

        <h5>3. Exemplo de Código</h5>
        <p>Aqui está um exemplo de um componente de classe em React que usa esses métodos de ciclo de vida:</p>
        <CodeBlock codigo={codigoEx1} />

        <h5>4. Explicação do Código</h5>
        <ul>
            <li><code>constructor()</code>: Inicializa o estado do componente.</li>
            <li><code>getDerivedStateFromProps()</code>: É chamado toda vez que o componente recebe novas propriedades ou antes da renderização. Aqui ele não faz nada (retorna<code>null</code>).</li>
            <li><code>render()</code>: Este método é obrigatório e é onde você define o que será renderizado. Ele é chamado sempre que o componente precisa ser re-renderizado.</li>
            <li><code>componentDidMount()</code>: Este método é chamado uma vez, logo após o componente ser montado no DOM. Aqui você pode, por exemplo, fazer requisições de dados.</li>
            <li><code>shouldComponentUpdate()</code>: Decide se o componente deve ou não ser re-renderizado. Retorna <code>true</code> para permitir a atualização</li>
            <li><code>getSnapshotBeforeUpdate()</code>: Chama-se antes das alterações serem aplicadas ao DOM.</li>
            <li><code>componentDidUpdate()</code>: É chamado após a atualização do DOM.</li>
            <li><code>componentWillUnmount()</code>: Chamado antes do componente ser removido do DOM.</li>
        </ul>
    </>)
}

export default CicloVida