import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/SideBar/SideBar';
import ProximosAtendimentos from '../../components/ProximosAtendimentos/ProximosAtendimentos';
import NovoAtendimento from '../../components/NovoAtendimento/NovoAtendimento';
import VisualizarTratamentos from '../../components/VisualizarTratamentos/VisualizarTratamentos';
import './Consultas.css';

const Consultas = () => {
  return (
    <div className="consultas-container">
      <Sidebar />
      <div className="consultas-content">
        <Routes>
          <Route path="/" element={<ProximosAtendimentos />} />
          <Route path="/proximos-atendimentos" element={<ProximosAtendimentos />} />
          <Route path="novo-atendimento" element={<NovoAtendimento />} />
          <Route path="visualizar-tratamentos" element={<VisualizarTratamentos />} />
        </Routes>
      </div>
    </div>
  );
};

export default Consultas;