import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTES
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PAGES
import Home from "./pages/Home/Home.js";
import SobreMin from "./pages/SobreMin/SobreMin";
import Especialidades from './pages/Especialidades/Especialidades';
import Contato from './pages/Contatos/Contato';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreMin />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;