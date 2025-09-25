import './MenuBar.css';

const MenuBar = () => {
  return (
    <nav className="menubar">
      <span>
  <img src='/imgs/SUS-REGIONAL.png' className='icon-menubar'></img>
      </span>

      <span>
      <ul className="menubar-list">
        <li className="menubar-item">
          <a href="/" className="menubar-link">Início</a>
        </li>
        <li className="menubar-item">
          <a href="/consultas" className="menubar-link">Consultas/Atendimentos</a>
        </li>
        <li className="menubar-item">
          <a href="/sobre" className="menubar-link">Sobre</a>
        </li>
      </ul>
      </span>
      
      <span></span>

    </nav>
  );
};

export default MenuBar;