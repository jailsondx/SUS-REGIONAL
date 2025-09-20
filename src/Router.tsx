import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Consultas from './pages/Consulta/Consultas';
import ProximosAtendimentos from './components/ProximosAtendimentos/ProximosAtendimentos';
import NovoAtendimento from './components/NovoAtendimento/NovoAtendimento';
import VisualizarTratamentos from './components/VisualizarTratamentos/VisualizarTratamentos';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultas" element={<Consultas />}>
        <Route index element={<ProximosAtendimentos />} />
        <Route path="proximos-atendimentos" element={<ProximosAtendimentos />} />
        <Route path="novo-atendimento" element={<NovoAtendimento />} />
        <Route path="visualizar-tratamentos" element={<VisualizarTratamentos />} />
      </Route>
      {/* 
       <Route path="/sobre" element={<Sobre />} />
      */}
    </Routes>
  );
};

export default Router;