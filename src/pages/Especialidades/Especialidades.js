import React from 'react';
import './Especialidades.css';

const Especialidades = () => {
  return (
    
    <div className="especialidades-container">
      <h2>Especialidades</h2>
      <div className="nav-grid">
         {/* Nav 1: DCNTs */}
        <nav className="especialidade-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJyOK7AK3m2jKRq5Igdd0A2yUdCY1FCdvvA&s" alt="Treino de Academia" />
          <h3>Nutrição DCNTs</h3>
          <p>Controle de regulação metabólica para pessoas diabéticas, 
            com hipertensão, obesidade, 
            doenças cardiovasculares e câncer.
          </p>
        </nav>
        {/* Nav 2: Dieta */}
        <nav className="especialidade-card">
          <img src="https://www.diananutricionista.com.br/wp-content/uploads/2022/09/Nutricao-Comportamental-Conheca-os-Seus-Beneficios.jpg" alt="Dieta Personalizada" />
          <h3>Dieta Comportamental</h3>
          <p>Reeducação alimentar, ajuda a diferenciar a fome física da fome emocional, 
            comer por estresse, ansiedade ou tristeza.
          </p>
        </nav>
        {/* Nav 3: Alimentação Saudável */}
        <nav className="especialidade-card">
          <img src="https://jpimg.com.br/uploads/2022/11/dieta-pode-ser-benefica-ou-prejudicial-para-o-emagrecimento.jpg" alt="Alimentação Saudável" />
          <h3>Dieta Emagrecimento</h3>
          <p>Emagrecimento saudável e sustentável, 
            focado em gastar mais calorias do que se consome, 
            aliado à escolha de alimentos saudáveis.
          </p>
        </nav>
        {/* Nav 4: Treino de Academia */}
        <nav className="especialidade-card">
          <img src="https://vitat.com.br/wp-content/uploads/2023/02/cropped-hipertrofia-e-definicao.jpg" alt="Treino de Academia" />
          <h3>Hipertrofia e Definição</h3>
          <p>Ganho de massa muscular, 
            consumir cerca de 300 a 500 calorias a mais do que você gasta por dia.
          </p>
        </nav>
        </div>
    </div>
  );
};

export default Especialidades;