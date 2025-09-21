import React from 'react';
import CardModel from '../components/CardModel01/CardModel';
import './home.css'

const Home: React.FC = () => {


  return (
    <div className='container-home'>
      <span className='line cards'>
        <CardModel
          imageSrc="/card/medicos.jpg"
          title="Várias Especialidades"
          description="Facilitamos o acesso a diversas especialidades médicas através do SUS, com apoio no agendamento de consultas e exames de forma gratuita.
Cardiologia, ginecologia, pediatria, ortopedia, dermatologia e muito mais — tudo ao seu alcance, com acolhimento e informação."
        />

         <CardModel
          imageSrc="/card/medicos.jpg"
          title="Acompanhemento Completo"
          description="Facilitamos o acesso a diversas especialidades médicas através do SUS, com apoio no agendamento de consultas e exames de forma gratuita.
Cardiologia, ginecologia, pediatria, ortopedia, dermatologia e muito mais — tudo ao seu alcance, com acolhimento e informação."
        />

         <CardModel
          imageSrc="/card/medicos.jpg"
          title="Facilitando Sua Vida"
          description="Facilitamos o acesso a diversas especialidades médicas através do SUS, com apoio no agendamento de consultas e exames de forma gratuita.
Cardiologia, ginecologia, pediatria, ortopedia, dermatologia e muito mais — tudo ao seu alcance, com acolhimento e informação."
        />
      </span>
    </div>
  );
};

export default Home;