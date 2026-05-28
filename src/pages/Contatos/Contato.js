import React from 'react';
import './Contato.css';
import amandaConversa from '../../assets/AmandaConversa.png';

const Contato = () => {
  return (
    <div className="contato-container">
      <div className="contato-coluna-esquerda">
        {/* Segunda Foto */}
        <img className="contato-foto" src={amandaConversa} alt="Atendimento Nutricional" />
        
        {/* Link Âncora para o WhatsApp */}
        <a href="https://wa.me/5518999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          WhatsApp
        </a>
      </div>

      {/* Nav de Mensagem com o Formulário */}
      <nav className="contato-form-nav">
        <h3>Mande sua mensagem</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" placeholder="Seu nome completo" required />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input type="tel" placeholder="(00) 00000-0000" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>

          <div className="form-group">
            <label>Mensagem:</label>
            <textarea rows="5" placeholder="Como posso te ajudar?" required></textarea>
          </div>

          <button type="submit" className="envio-btn">Enviar Mensagem</button>
        </form>
      </nav>
    </div>
  );
};

export default Contato;