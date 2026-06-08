import { Link, NavLink } from 'react-router-dom';

import instragramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';

import './Navbar.css';

const Navbar = () => {
  return (
  <nav className="navbar">
    <div className="nome">
    <h3>AMANDA <span>Santos</span></h3>
    </div>
    <div className="rede-social">
      <h3>REDE <span>Social</span></h3>
      <a href="https://www.instagram.com/amandagsant0s?igsh=bDMwbnpmZ3M2djF3" target="_blank" rel="noreferrer">
        <img src={instragramIcon} alt="Instagram" />
      </a>
      <a href="https://wa.me/5518997958843" target="_blank" rel="noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
    <ul className="links_list">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
        Sobre Mim
        </NavLink>
      </li>
      <li>
        <NavLink to="/especialidades" className={({ isActive }) => (isActive ? 'active' : '')}>
        Especialidades
        </NavLink>
      </li>
      <li>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contato
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar