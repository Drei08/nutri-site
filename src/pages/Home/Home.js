import React from 'react';
import './Home.css';

import fotoNutri from '../../assets/home.png';

const Home = () => {
  return (
    <div>
      <div 
        className="home-page-wrapper" 
        style={{ backgroundImage: `linear-gradient( rgba(202, 236, 225, 0.8), rgba(106, 157, 139, 0.8)), url(${fotoNutri})` }}
      >
      {/* Coluna da Esquerda: Seu bloco de texto */}
      <div className="container">
        <h1>Nutrição é Saúde</h1>
        <h2>VAMOS REEDUCAR?</h2>
        <h3>Boa saúde começa também pela alimentação!</h3>
        <h3>Uma dieta equilibrada fornece nutrientes essenciais</h3>
        <h3>Para gerar a energia e disposição que precisamos</h3>
        <h3>Nos permite viver com mais vitalidade</h3>
        <h3>Reduzindo até as dependências de medicamentos.</h3>
      </div>
      {/* Coluna da Direita: A imagem em destaque */}
      {/* <div className="home-image-container">
        <img src={fotoNutri} alt="Nutricionista Amanda Santos" className="home-profile-img" />
      </div> */}
      </div>
    </div>
    
  );
};

export default Home;