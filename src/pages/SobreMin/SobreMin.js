import './SobreMin.css';

import { Link } from "react-router-dom";

import amandaJalecoImg from '../../assets/AmandaJaleco.png';

const SobreMin = () => {
  return (
    <div className="sobre-container">
      <div className="sobre-foto">
        <img src={amandaJalecoImg} alt="" />
      </div>
      <nav className="sobre-credenciais">
        <h2>Minha Trajetória</h2>
        <p className="sobre-texto"><strong>Credencial:</strong> Nutricionista Clínica <strong>CRN-64987</strong></p>
        <p><strong>Graduação:</strong> Universidade do Oeste Paulista - <strong>UNOESTE</strong> - Presidente Prudente/SP</p>
        <p><strong>Áreas de Atuação:</strong> Nutrição Clínica, Saúde Pública e Alimentação Escolar</p>
        <p><strong>Pós-graduação</strong> </p>
        <p>• Nutrição Coletiva e Saúde Pública pela Universidade - <strong>FAVENI</strong></p>
        <p>• Nutrição Clínica e Comportamental pela Universidade - <strong>UNIGUAÇU</strong></p>
        <p><strong>Trabalhos</strong></p>
        <p>• UBS Armando Cenedesi de Inúbia Paulista/SP -  Concurso público municipal</p>
        <p>• Creche Pequeno Cidadão de Inúbia Paulista/SP - Concurso público municipal</p>
        <p><strong>Atendimento</strong></p>
        <p>• <a href="asdsas" target='_blank'><strong>FISIOTRATO</strong></a> - Clínica de Terapias de Osvaldo Cruz/SP - Particular/Presencial</p>
        <p>• Personalizado à distância <Link to="/contato"><strong>ONLINE</strong></Link> para todo o País - Particular/Online</p>
      </nav>
    </div>
  );
};

export default SobreMin;