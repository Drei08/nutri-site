import React from 'react';
import './Contato.css';
import amandaConversa from '../../assets/AmandaConversa.png';

const Contato = () => {
  return (
    <div className="contato-page">
      {/* <div className="title-contato">
        <h2>Vamos Conversar?</h2>
      </div> */}
      <div className='contato-container'>
        <div className="contato-coluna-esquerda">
          {/* Foto */}
          <img className="contato-foto" src={amandaConversa} alt="Atendimento Nutricional" />
          {/* Link para o WhatsApp */}
          <a href="https://wa.me/5518997958843" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            WhatsApp
          </a>
        </div>

        {/* Nav contato formulário */}
        <nav className="contato-form-nav">
          <h3>Vamos Conversar?</h3>
          <form onSubmit={(e) => e.preventDefault()}>

            <div className="form-group">
              <label>Nome:</label>
              <input type="text" placeholder="Digite seu nome completo" required />
            </div>

            <div className="form-group">
              <label>Telefone:</label>
              <input type="tel" placeholder="(xx) xxxxx-xxxx" required />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Digite seu email" required />
            </div>

            <div className="form-group">
              <label>Mensagem:</label>
              <textarea rows="3" placeholder="Como posso te ajudar?" required></textarea>
            </div>

            <button type="submit" className="envio-btn">Enviar</button>
          </form>
        </nav>
      </div>
    </div> 
  );
};

export default Contato;