import { Routes, Route } from "react-router-dom";

import Sidebar from './components/sidebar/Sidebar.jsx'
import Introducao from './pages/introducao/Introducao.jsx'
import TiposComponentes from "./pages/componentes/TiposComponentes.jsx";
import ComposicaoComponentes from "./pages/componentes/ComposicaoComponentes.jsx";
import Props from "./pages/passagem-valor/Props.jsx";
import ContextApiPV from "./pages/passagem-valor/ContextApi.jsx";
import Conceito from "./pages/estado-componente/Conceito.jsx";
import State from "./pages/estado-componente/State.jsx";
import ContextApiEC from "./pages/estado-componente/ContextApi.jsx";
import CicloVida from "./pages/ciclo-vida/CicloVida.jsx";
import Hooks from "./pages/hooks/Hooks.jsx";
import ReactRouter from "./pages/react-router/ReactRouter.jsx";
import Formulario from "./pages/formulario/Formulario.jsx";
import IntegracaoApi from "./pages/integracao-api/IntegracaoApi.jsx";
import './App.css'

function App() {

  return(
  <>
    <div className='wrapper d-flex align-items-stretch'>
      <Sidebar />
      <div id='content' className='p-4 p-md-5 pt-5'>
        <Routes>
          <Route path="/" element={<Introducao />} />
          <Route path="/componentes/tipos" element={<TiposComponentes />} />
          <Route path="/componentes/composicao" element={<ComposicaoComponentes />} />
          <Route path="/passagem-valor/props" element={<Props />} />
          <Route path="/passagem-valor/context-api" element={<ContextApiPV />} />
          <Route path="/estado-componente/conceito" element={<Conceito />} />
          <Route path="/estado-componente/state" element={<State />} />
          <Route path="/estado-componente/context-api" element={<ContextApiEC />} />
          <Route path="/ciclo-vida" element={<CicloVida />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/integracao-api" element={<IntegracaoApi />} />
        </Routes>
      </div>
    </div>
  </>)
}

export default App
