import React from 'react';
import './Especialidades.css';

const Especialidades = () => {
  return (
    <div className="especialidades-container">
      <h2>Especialidades</h2>
      
      <div className="nav-grid">
        {/* Nav 1: Dieta */}
        <nav className="especialidade-card">
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300" alt="Dieta Personalizada" />
          <h3>Planejamento de Dieta</h3>
          <p>Planos alimentares totalmente individualizados baseados na sua rotina, preferências e exames bioquímicos.</p>
        </nav>

        {/* Nav 2: Alimentação Saudável */}
        <nav className="especialidade-card">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300" alt="Alimentação Saudável" />
          <h3>Alimentação Saudável</h3>
          <p>Foco em reeducação alimentar duradoura para melhora de exames, longevidade, disposição e bem-estar geral asdasdasdasdsa asdasdasdas.</p>
        </nav>

        {/* Nav 3: Treino de Academia */}
        <nav className="especialidade-card">
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300" alt="Treino de Academia" />
          <h3>Nutrição Esportiva (Treino)</h3>
          <p>Estratégias de suplementação e alimentação focadas em hipertrofia, emagrecimento e ganho de rendimento na academia.</p>
        </nav>
      </div>
    </div>
  );
};

export default Especialidades;