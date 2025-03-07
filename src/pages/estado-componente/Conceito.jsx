function Conceito(){
    return(
    <>
        <h2 className="mb-4">Conceito</h2>
        <p>Em React, o estado de componentes é uma maneira de armazenar e gerenciar informações que podem mudar ao longo do tempo. Quando o estado de um componente muda, o React re-renderiza esse componente e seus filhos para refletir as atualizações. O estado é uma parte fundamental da interação de um componente com o usuário, pois ele permite que a interface reaja a entradas e mudanças de dados.</p>

        <h4>Tipos de Estado em React</h4>
        <p>Existem diferentes formas de gerenciar o estado em React, que podem ser agrupadas em duas principais categorias:</p>

        <h5>1. Estado Local (ou Interno)</h5>
        <p>- Cada componente pode ter seu próprio estado, gerenciado dentro dele mesmo.</p>
        <p>- Normalmente usado quando você precisa armazenar dados que são específicos de um único componente.</p>
        <p>- Utilizado com o hook <code>useState</code> em componentes funcionais ou com <code>this.state</code> em componentes de classe.</p>

        <h5>2. Estado Global</h5>
        <p>- Usado quando você precisa compartilhar o estado entre múltiplos componentes.</p>
        <p>- É necessário usar alguma ferramenta de gerenciamento de estado como <b>Context API</b>, <b>Redux</b>, <b>Recoil</b>, <b>MobX</b>, etc.</p>

        <h4>Considerações Finais</h4>
        <p>- <b>Estado Local</b>: Usado em componentes independentes para armazenar dados internos que mudam com a interação do usuário.</p>
        <p>- <b>Estado Global</b>: Usado para compartilhar dados entre componentes não diretamente relacionados, geralmente com Context API, Redux ou outras soluções.</p>
    </>)
}

export default Conceito;