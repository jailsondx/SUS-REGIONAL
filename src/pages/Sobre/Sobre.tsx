
import './Sobre.css';

const Sobre = () => {

  return (
    <div className='container-sobre'>
      <span className='line-2'>
        <div className='div-img-alexandra'>
          <img src="/imgs/Ale.png" alt="Alexandra" className='Alexandra' />
        </div>
        <div>
          <span>
            <label className='title-light txt100'>Alexandra</label>
            <label className='title-bold txt100'>Rodrigues</label>
          </span>
          <span className='texto-sobre'>
            <label>Formanda em Administração pela FLF. </label>
            <label>Apaixonada por contribuir para o desenvolvimento comunitário e promover mudanças positivas na sociedade. Sustentabilidade, comunicação e organização, buscando sempre impactar vidas de forma significativa.</label>
            <label>Idealizadora do projeto SUS REGIONAL.</label>
          </span>
        </div>
      </span>
    </div>
  );
};

export default Sobre;