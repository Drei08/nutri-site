import React from 'react';
import './Home.css';
import fotoNutri from "../../assets/jaleco.png";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      {/* Coluna da Esquerda: Seu bloco de texto */}
      <div className="home-container">
        <h1>Bem-vinda ao seu Espaço de Saúde</h1>
        <p>
          Transformando vidas através de uma alimentação consciente, equilibrada e 
          focada nos seus objetivos individuais.
        </p>
      </div>

      {/* Coluna da Direita: A imagem em destaque */}
      <div className="home-image-container">
        <img src={fotoNutri} alt="Nutricionista Amanda Santos" className="home-profile-img" />
      </div>
    </div>
  );
};

export default Home;