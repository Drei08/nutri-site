import React from 'react';
import './SobreMin.css';
import amandaJalecoImg from '../../assets/AmandaJaleco.png';

const SobreMin = () => {
  return (
    <div className="sobre-container">
      <div className="sobre-foto">
        <img src={amandaJalecoImg} alt="" />
      </div>
      <nav className="sobre-credenciais">
        <h2>Minha Trajetória</h2>
        <p className="sobre-texto"><strong>Credencial:</strong> Nutricionista Clínica <strong>CRN-XXXX</strong></p>
        <p><strong>Graduação:</strong> Desde 2020 ajudando pacientes a alcançarem sua melhor versão física e mental.</p>
        <p><strong>Tempo de Atuação:</strong> Desde 2020 ajudando pacientes a alcançarem sua melhor versão física e mental.</p>
        <p><strong>Especialização:</strong> Especializada em nutrição comportamental e esportiva, utilizo a ciência aliada à empatia para criar planos que se encaixam na sua rotina real, sem terrorismos nutricionais.
        </p>
      </nav>
    </div>
  );
};

export default SobreMin;