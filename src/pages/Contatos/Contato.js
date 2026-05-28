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
          Fale Comigo no WhatsApp
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
            <input type="tel" placeholder="(18) 99999-9999" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="seuemail@exemplo.com" required />
          </div>

          <div className="form-group">
            <label>Mensagem:</label>
            <textarea rows="2" placeholder="Como posso te ajudar?" required></textarea>
          </div>

          <button type="submit" className="envio-btn">Enviar Mensagem</button>
        </form>
      </nav>
    </div>
  );
};

export default Contato;