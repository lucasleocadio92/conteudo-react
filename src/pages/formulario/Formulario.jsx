import CodeBlock from "../../components/code-block/CodeBlock"

const codigoEx1 = `import React, { useState } from "react";

function Formulario() {
  // Definindo o estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  // Função para manipular as mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Nome: \${formData.nome}, Email: \${formData.email}\`);
  };

  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
`;
const codigoEx2 = `import React, { useState } from "react";

function FormularioDinamico() {
  const [itens, setItens] = useState([""]);

  const handleChange = (e, index) => {
    const newItens = [...itens];
    newItens[index] = e.target.value;
    setItens(newItens);
  };

  const handleAddItem = () => {
    setItens([...itens, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Itens: " + itens.join(", "));
  };

  return (
    <div>
      <h1>Adicionar Itens</h1>
      <form onSubmit={handleSubmit}>
        {itens.map((item, index) => (
          <div key={index}>
            <label>Item {index + 1}:</label>
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(e, index)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>
          Adicionar item
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioDinamico;
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

function Formulario(){
    return(
    <>
        <h2 className="mb-4">Formulário</h2>
        <p>Em React, a criação de formulários envolve a manipulação de estados para armazenar os dados inseridos pelo usuário. Aqui está um exemplo básico de como criar um formulário simples em React:</p>

        <h4>1. Criação de um Formulário Simples</h4>
        <CodeBlock codigo={codigoEx1} />
        <br />
        <h5>Explicação do código:</h5>
        <ul>
            <li><b>Estado do Formulário:</b> Usamos o hook <code>useState</code> para manter o estado do formulário, armazenando os valores dos campos <code>nome</code> e <code>email</code>.</li>
            <li><b>Manipulação de mudanças:</b> A função <code>handleChange</code> é chamada sempre que o valor de um campo é alterado. Ela atualiza o estado do formulário.</li>
            <li><code>MemoryRouter</code>: Usado em ambientes como testes ou aplicativos móveis, onde a navegação é gerenciada em memória, sem interação com a URL.</li>
            <li><b>Envio do formulário:</b> Quando o formulário é enviado, a função <code>handleSubmit</code> é chamada, prevenindo o comportamento padrão de recarregar a página e exibindo os dados no <code>alert</code>.</li>
        </ul>

        <h4>2. Trabalhando com campos dinâmicos (exemplo de uma lista de itens)</h4>
        <p>Se você quiser adicionar campos dinamicamente, como um array de inputs, o código ficaria assim:</p>
        <CodeBlock codigo={codigoEx2} />
        <br />
        <h5>O que acontece nesse código?</h5>
        <ul>
            <li><b>Campos dinâmicos:</b> O estado <code>itens</code> é um array que armazena os valores de cada campo de entrada. Cada vez que um item é adicionado ao array, um novo campo é exibido no formulário.</li>
            <li><b>Adicionar itens:</b> Ao clicar no botão "Adicionar item", um novo campo de entrada é adicionado ao estado, fazendo com que a interface seja atualizada com um novo campo de input.</li>
        </ul>
    </>)
}

export default Formulario;