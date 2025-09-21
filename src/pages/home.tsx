import React from 'react';
import './home.css'

const Home: React.FC = () => {


  return (
    <div className='container-home'>
      <span className='line-1'>
        <div className='text-home1'>
          <label className='title-light'>Estamos aqui para facilitar sua vida</label>
          <label className='title-bold'>Agilidade para sua especialidade</label>
          <label>Facilitamos o acesso a diversas especialidades médicas através do SUS, com apoio no agendamento de consultas e exames de forma gratuita.
Cardiologia, ginecologia, pediatria, ortopedia, dermatologia e muito mais — tudo ao seu alcance, com acolhimento e informação.</label>
        </div>
        <div>
          <img src="/imgs/dupla-medicos.png" alt="Logo" className='logo-home' />
        </div>
       
      </span>
    </div>
  );
};

export default Home;