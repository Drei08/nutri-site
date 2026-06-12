//CSS
import './Contato.css';

//Hook
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

//Assets
import amandaConversa from '../../assets/AmandaConversa.png';

const Contato = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handdleSubmit(event){
    event.preventDefault();

    if(name.trim() === '' || phone.trim() === '' || 
        email.trim() === '' || message.trim() === ''){
      alert("Preencha TODOS os campo!")
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("Verificando credenciais:", { serviceId, templateId, publicKey });

      const templateParams = {
      from_name: name,
      tel: phone,
      email: email,
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) =>{
      alert("MENSAGEM ENVIADA COM SUCESSO!");
      console.log("EMAIL ENVIADO!", response.status, response.text)
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    })
}

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

          <form onSubmit={handdleSubmit}>

            <div className="form-group">
              <label>Nome:</label>
              <input 
                type="text" 
                placeholder="Digite seu nome completo" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
              />
            </div>

            <div className="form-group">
              <label>Telefone:</label>
              <input 
                type="tel" 
                placeholder="(xx) xxxxx-xxxx" 
                onChange={(e) => setPhone(e.target.value)}
                value={phone} 
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                placeholder="Digite seu email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
              />
            </div>

            <div className="form-group">
              <label>Mensagem:</label>
              <textarea 
                rows="3" 
                placeholder="Como posso te ajudar?" 
                onChange={(e) => setMessage(e.target.value)}
                value={message} 
              />
            </div>
            {/* envio-btn */}
            <button type="submit" className="envio-btn">Enviar</button>
          </form>
        </nav>
      </div>
    </div> 
  );
};

export default Contato;