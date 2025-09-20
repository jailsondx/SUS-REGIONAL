import { NavLink } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <NavLink
            to="proximos-atendimentos"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            Consultar Próximos Atendimentos
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="novo-atendimento"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            Marcar Novo Atendimento
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="visualizar-tratamentos"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            Visualizar Tratamentos
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;