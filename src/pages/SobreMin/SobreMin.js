import React from 'react';
import './SobreMin.css';
import amandaJalecoImg from '../../assets/AmandaJaleco.png';

const SobreMin = () => {
  return (
    <div className="sobre-container">
      <div className="sobre-foto">
        {/* Substitua o src pela sua imagem local ou URL correspondente */}
        <img src={amandaJalecoImg} alt="" />
      </div>
      <nav className="sobre-credenciais">
        <h2>Minha Trajetória</h2>
        <p><strong>Credencial:</strong> Nutricionista Clínica CRN-XXXX</p>
        <p><strong>Tempo de Atuação:</strong> Desde 2020 ajudando pacientes a alcançarem sua melhor versão física e mental.</p>
        <p className="sobre-texto">
          Especializada em nutrição comportamental e esportiva, utilizo a ciência aliada à empatia para criar planos que se encaixam na sua rotina real, sem terrorismos nutricionais.
        </p>
      </nav>
    </div>
  );
};

export default SobreMin;