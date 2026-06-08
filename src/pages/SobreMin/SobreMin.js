import './SobreMin.css';

import { Link } from "react-router-dom";

import amandaJalecoImg from '../../assets/AmandaJaleco.png';

const SobreMin = () => {
  return (
    <div>
      <div className='title-sobre'>
        <h2>MINHA TRAGETÓRIA</h2>
      </div>
      <div className="sobre-container">
        <div className="sobre-foto">
          <img src={amandaJalecoImg} alt="" />
        </div>
        <nav className="sobre-credenciais">
          <p className="sobre-texto"><strong>Credencial:</strong> Nutricionista Clínica - <strong>CRN-64987</strong></p>
          <p><strong>Graduação:</strong> <a href="https://www.unoeste.br/" target="_blank" rel="noreferrer"><strong>UNOESTE</strong></a> - Presidente Prudente/SP</p>
          <p><strong>Áreas de Atuação:</strong> Nutrição Clínica, Saúde Pública e Alimentação Escolar</p>
          <p><strong>Pós-graduação</strong> </p>
          <p>• Nutrição Coletiva e Saúde Pública pela Universidade - <strong>FAVENI</strong></p>
          <p>• Nutrição Clínica e Comportamental pela Universidade - <strong>UNIGUAÇU</strong></p>
          <p><strong>Trabalhos</strong></p>
          <p>• UBS Armando Cenedesi de Inúbia Paulista/SP -  Concurso público municipal</p>
          <p>• Creche Pequeno Cidadão de Inúbia Paulista/SP - Concurso público municipal</p>
          <p><strong>Atendimento</strong></p>
          <p>• <a href="https://www.google.com/search?q=fisiotrato+osvaldo+cruz&rlz=1C1UEAD_pt-BRBR1201BR1201&oq=fisiotrato+osvaldo+cruz&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyCAgCEAAYFhgeMgcIAxAAGO8FMgoIBBAAGIAEGKIEMgcIBRAAGO8FMgcIBhAAGO8F0gEIODAyOWowajeoAgiwAgHxBQEei8zvLcte&sourceid=chrome&ie=UTF-8" 
              target='_blank' rel="noreferrer"><strong>FISIOTRATO</strong>
            </a> - Clínica de Terapias de Osvaldo Cruz/SP - Particular/Presencial
          </p>
          <p>• Personalizado à distância <Link to="/contato"><strong>ONLINE</strong></Link> para todo o País - Particular/Online</p>
        </nav>
      </div>
    </div>
  );
};

export default SobreMin;