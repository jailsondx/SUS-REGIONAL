import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigation = (url: string, isExternal: boolean = false) => {
    if (isExternal) {
      // Abre o link externo em uma nova aba
      window.open(url, '_blank');
    } else {
      // Para links internos, usa o navigate
      navigate(url);
    }
  };

  return (
    <nav className="footer">
      <span>
        <label>Links úteis:</label>
      </span>

      <span>
        <ul className="footer-list">
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://www.saude.ce.gov.br/', true)} className="footer-link">
              Sec. de Saúde do Ceará
            </a>
          </li>
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://www.ceara.gov.br/', true)} className="footer-link">
              Governo do Estado do Ceará
            </a>
          </li>
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://www.gov.br/saude/pt-br/sus', true)} className="footer-link">
              Ministério da Saúde - SUS
            </a>
          </li>
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://www.isgh.org.br/', true)} className="footer-link">
              Instituto de Sáude e Gestão Hospitalar - ISGH
            </a>
          </li>
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://www.stacasa.com.br/', true)} className="footer-link">
              Santa Casa de Misericórdia de Sobral
            </a>
          </li>
          <li className="footer-item">
            <a onClick={() => handleNavigation('https://saude.sobral.ce.gov.br/', true)} className="footer-link">
              Secretaria de Saúde de Sobral
            </a>
          </li>
        </ul>
      </span>

      <span></span>
    </nav>
  );
};

export default Footer;
