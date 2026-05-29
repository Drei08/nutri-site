import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
  <nav className="navbar">
    <NavLink to="/" className="brand">
    AMANDA <span>Santos</span>
    </NavLink>
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