import React from 'react';
import './Especialidades.css';

//Assets
import dcnt from '../../assets/dcnts.png';
import emagrecimento from '../../assets/dietaEmagrecimento.png';
import comporta from'../../assets/comportamental.png';
import defini from '../../assets/definicao.png'

const Especialidades = () => {
  return (
    <div>
      <div className="title-especialidades">
        <h2>ESPECIALIDADES</h2>
      </div>
      <div className="especialidades-container">
        <div className="nav-grid">
          {/* Nav 1: DCNTs */}
          <nav className="especialidade-card">
            <img src={dcnt} alt="Treino de Academia" />
            <h3>Nutrição DCNTs</h3>
            <p>Controle de regulação metabólica para pessoas diabéticas, 
              com hipertensão, obesidade, 
              doenças cardiovasculares e câncer.
            </p>
          </nav>
          {/* Nav 2: Dieta */}
          <nav className="especialidade-card">
            <img src={comporta} alt="Dieta Personalizada" />
            <h3>Dieta Comportamental</h3>
            <p>Reeducação alimentar, ajuda a diferenciar a fome física da fome emocional, 
              no controle de comer por estresse, ansiedade ou tristeza.
            </p>
          </nav>
          {/* Nav 3: Alimentação Saudável */}
          <nav className="especialidade-card">
            <img src={emagrecimento} alt="Alimentação Saudável" />
            <h3>Dieta e Emagrecimento</h3>
            <p>Emagrecimento saudável e sustentável, 
              focado em gastar mais calorias do que se consome, 
              aliado à escolha de alimentos saudáveis.
            </p>
          </nav>
          {/* Nav 4: Treino de Academia */}
          <nav className="especialidade-card">
            <img src={defini} alt="Treino de Academia" />
            <h3>Hipertrofia e Definição</h3>
            <p>Ganho de massa muscular, 
              consumindo cerca de 300 a 500 calorias a mais do que você gasta por dia.
            </p>
          </nav>
          </div>
      </div>
    </div>
  );
};

export default Especialidades;