import React, { useState } from 'react';
import Home from "./pages/Home/Home";
import SobreMin from "./pages/SobreMin/SobreMin";
import Especialidades from './pages/Especialidades/Especialidades';
import Contato from './pages/Contatos/Contato';
import './App.css';

const App = () => {
  const [paginaAtiva, setPaginaAtiva] = useState('home');

  const renderizarPagina = () => {
    switch (paginaAtiva) {
      case 'home':
        return <Home />;
      case 'sobre':
        return <SobreMin />;
      case 'especialidades':
        return <Especialidades />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* Menu de Navegação */}
      <header className="app-header">
        <nav className="menu-nav">
          <button className={paginaAtiva === 'home' ? 'active' : ''} onClick={() => setPaginaAtiva('home')}>Home</button>
          <button className={paginaAtiva === 'sobre' ? 'active' : ''} onClick={() => setPaginaAtiva('sobre')}>Sobre Mim</button>
          <button className={paginaAtiva === 'especialidades' ? 'active' : ''} onClick={() => setPaginaAtiva('especialidades')}>Especialidades</button>
          <button className={paginaAtiva === 'contato' ? 'active' : ''} onClick={() => setPaginaAtiva('contato')}>Contato</button>
        </nav>
      </header>

      {/* Conteúdo Dinâmico da SPA */}
      <main className="app-content">
        {renderizarPagina()}
      </main>

      {/* Rodapé Fixo */}
      <footer className="app-footer">
        <p>Formada por: Unoeste Presidente Prudente - 2020</p>
      </footer>
    </div>
  );
};

export default App;