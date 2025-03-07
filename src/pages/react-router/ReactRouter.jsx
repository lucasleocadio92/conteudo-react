import CodeBlock from "../../components/code-block/CodeBlock"
import './ReactRouter.css'

const codigoEx1 = `npm install react-router-dom
`;
const codigoEx2 = `yarn add react-router-dom
`;
const codigoEx3 = `import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
`;
const codigoEx4 = `import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
`;
const codigoEx5 = `import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>About</NavLink>
    </nav>
  );
};

export default Navigation;
`;
const codigoEx6 = `import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const goToAbout = () => {
    navigate('/about');
  };
  
  return (
    <div>
      <h2>Home</h2>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

export default Home;
`;
const codigoEx7 = `import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  
  return <h2>User ID: {userId}</h2>;
};

export default User;
`;
const codigoEx8 = `<Route path="/user/:userId" element={<User />} />
`;
const codigoEx9 = `import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet /> {/* Exibe o conteúdo das rotas filhas aqui */}
    </div>
  );
};

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
`;

function ReactRouter(){
    return(
    <>
        <h2 className="mb-4">React Router</h2>
        <p>Os <b>React Router</b> é uma biblioteca padrão para gerenciamento de navegação em aplicações React. Ele permite que você crie uma navegação dinâmica e baseada em componentes, o que é essencial para criar SPA (Single Page Applications). React Router permite que você defina múltiplas rotas e renderize diferentes componentes com base na URL.</p>

        <h4>Tipos de React Router</h4>
        <ul className="tipos-react-router">
            <li><code>BrowserRouter</code>: Usado para navegar em uma aplicação com URLs do tipo <code>"/home"</code> ou seja, URLs tradicionais que não possuem o caractere hash <code>#</code>. Ele usa o HTML5 History API para gerenciar o histórico de navegação.</li>
            <li><code>HashRouter</code>: Usado quando você precisa que a URL tenha o caractere <code>#</code> na frente, como <code>"/#/home"</code>. Esse tipo é útil quando o servidor não está configurado para manipular URLs de uma SPA.</li>
            <li><code>MemoryRouter</code>: Usado em ambientes como testes ou aplicativos móveis, onde a navegação é gerenciada em memória, sem interação com a URL.</li>
            <li><code>Route</code>: Define uma rota no React Router. Pode ser usada dentro de um <code>Router</code> para associar um caminho a um componente específico.</li>
            <li><code>Link</code>: Usado para criar links de navegação entre rotas dentro da aplicação, sem recarregar a página (o comportamento tradicional de links de HTML).</li>
            <li><code>NavLink</code>: Similar ao <code>Link</code>, mas com a capacidade de aplicar estilos adicionais quando o link estiver ativo, permitindo destacar a rota atual.</li>
            <li><code>useNavigate</code>: Hook para realizar navegação programática (similar ao <code>history.push()</code>).</li>
            <li><code>useLocation</code>: Hook que retorna a localização atual da URL, útil para acessar informações sobre a navegação.</li>
            <li><code>useParams</code>: Hook usado para acessar parâmetros de URL em uma rota com parâmetros dinâmicos.</li>
            <li><code>Outlet</code>: Permite a renderização de rotas aninhadas, funcionando como um "ponto de saída" para rotas filhas.</li>
        </ul>

        <h5>Instalando o React Router</h5>
        <p>Primeiro, você precisa instalar o React Router na sua aplicação. Se você já tem uma aplicação React criada, pode instalar o React Router usando o seguinte comando no terminal:</p>
        <CodeBlock codigo={codigoEx1} />
        <p>Se você estiver usando <b>yarn</b>, use:</p>
        <CodeBlock codigo={codigoEx2} />

        <br />
        <h5>Exemplos de código</h5>
        <p>1. <code>BrowserRouter</code> <b>e</b> <code>Route</code></p>
        <CodeBlock codigo={codigoEx3} />

        <p>2. <code>Link</code></p>
        <CodeBlock codigo={codigoEx4} />
        
        <p>3. <code>NavLink</code> <b>(com estilos ativos):</b></p>
        <CodeBlock codigo={codigoEx5} />

        <p>4. <code>useNavigate</code> <b>para navegação programática:</b></p>
        <CodeBlock codigo={codigoEx6} />

        <p>5. <code>useParams</code> <b>para acessar parâmetros de URL:</b></p>
        <CodeBlock codigo={codigoEx7} />
        <p><b>Rota para o</b> <code>User</code>:</p>
        <CodeBlock codigo={codigoEx8} />

        <p>6. <b>Rotas Aninhadas com</b> <code>Outlet</code>:</p>
        <CodeBlock codigo={codigoEx9} />
        <br />
        <h4>Conclusão</h4>
        <p>Esses exemplos cobrem as funcionalidades principais do <b>React Router</b> , que é uma biblioteca poderosa para controlar a navegação em aplicativos React. Dependendo do tipo de aplicação e da estrutura desejada, você pode usar diferentes tipos de routers, como <code>BrowserRouter</code>, <code>HashRouter</code>, entre outros, e integrar esses recursos para uma navegação fluida e eficiente.</p>
    </>)
}

export default ReactRouter;