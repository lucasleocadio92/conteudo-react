import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './Sidebar.css'

function Sidebar(){
    return(
      <>
        <Navbar id="sidebarCollapse" className="sidebar p-4 align-items-start collapse collapse-horizontal show">
          <Container className='flex-column mt-5'>
            <Link to="/" className="logo navbar-brand"><h1>Contéudo</h1></Link>
            <Nav defaultActiveKey="/" className="flex-column w-100 mb-5">
            <Link to="/" className="nav-link">Introdução</Link>
            <NavDropdown title="Componentes" active="true">
              <Link to="/componentes/tipos" className="dropdown-item">Tipos de componentes</Link>
              <Link to="/componentes/composicao" className="dropdown-item">Composição de componentes</Link>
            </NavDropdown>
            <NavDropdown title="Passegem de valor" active="true">
              <Link to="/passagem-valor/props" className="dropdown-item">Props</Link>
              <Link to="/passagem-valor/context-api" className="dropdown-item">Context API</Link>
            </NavDropdown>
            <NavDropdown title="Estado de componente" active="true">
              <Link to="/estado-componente/conceito" className="dropdown-item">Conceito</Link>
              <Link to="/estado-componente/state" className="dropdown-item">State</Link>
              <Link to="/estado-componente/context-api" className="dropdown-item">Context API</Link>
            </NavDropdown>          
            <Link to="/ciclo-vida" className="nav-link">Ciclo de Vida</Link>
            <Link to="/hooks" className="nav-link">Hooks</Link>
            <Link to="/react-router" className="nav-link">React Router</Link>
            <Link to="/formulario" className="nav-link">Formulário</Link>
            <Link to="/integracao-api" className="nav-link">Integração com API</Link>
            </Nav>
            <div className="footer">
              <p>
                Copyright ©<script>document.write(new Date().getFullYear());</script>2025 Todos os direitos reservados | Este modelo foi feito com por Lucas
              </p>
            </div>
          </Container>
        </Navbar>
        <div class="custom-menu">
            <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-expanded="true" aria-controls="sidebarCollapse">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
        </div>
      </>
      )
}

export default Sidebar