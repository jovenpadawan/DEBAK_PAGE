import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useMenuToggle } from '../hooks/useMenuToggle';

export default function Header() {
  const { isMenuActive, toggleMenu, handleNavigation } = useMenuToggle();
  const [institucionOpen, setInstitucionOpen] = useState(false);
  const [eventosOpen, setEventosOpen] = useState(false);
  const location = useLocation();
  
  const isInstitucionActive = location.pathname.startsWith('/institucion');
  const isEventosActive = location.pathname.startsWith('/eventos');

  useEffect(() => {
    if (isInstitucionActive) {
      setInstitucionOpen(true);
    }
  }, [isInstitucionActive]);

  useEffect(() => {
    if (isEventosActive) {
      setEventosOpen(true);
    }
  }, [isEventosActive]);

  const closeMenu = () => {
    handleNavigation();
  };

  return (
    <>
      <header className={`main-header ${isMenuActive ? 'active' : ''}`}>
        <button className={`menu-btn ${isMenuActive ? 'active' : ''}`} id="menuBtn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-logo">
          <img src="./imagenes/debakLogo.jpeg" alt="DEBAK TKD" className="logo-img" />
        </div>
      </header>

      <div className={`overlay ${isMenuActive ? 'active' : ''}`} id="overlay" onClick={toggleMenu}></div>

      <nav className={`side-menu ${isMenuActive ? 'active' : ''}`} id="sideMenu">
        <ul>
          <li>
            <NavLink end to="/" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              INICIO
            </NavLink>
          </li>
          <li className={`menu-group ${institucionOpen ? 'open' : ''}`}>
            <button
              type="button"
              className={`menu-link menu-group-button ${isInstitucionActive ? 'active-link' : ''}`}
              onClick={() => setInstitucionOpen(!institucionOpen)}
            >
              INSTITUCIÓN
            </button>
            <ul className="submenu">
              <li>
                <NavLink to="./institucion/mision" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
                  MISIÓN
                </NavLink>
              </li>
              <li>
                <NavLink to="./institucion/vision" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
                  VISIÓN
                </NavLink>
              </li>
              <li>
                <NavLink to="./institucion/estructura" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
                  ESTRUCTURA ORGANIZACIONAL
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/entrenadores" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              ENTRENADORES
            </NavLink>
          </li>
          <li>
            <NavLink to="/deportistas" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              DEPORTISTAS DESTACADOS
            </NavLink>
          </li>
          
          <li className={`menu-group ${eventosOpen ? 'open' : ''}`}>
            <button
              type="button"
              className={`menu-link menu-group-button ${isEventosActive ? 'active-link' : ''}`}
              onClick={() => setEventosOpen(!eventosOpen)}
            >
              EVENTOS
            </button>
            <ul className="submenu">
              <li>
                <NavLink 
                  to="/eventos" 
                  state={{ categoria: 'deportivos' }}
                  className={() => location.state?.categoria === 'deportivos' && isEventosActive ? 'menu-link active-link' : 'menu-link'} 
                  onClick={closeMenu}
                >
                  EVENTOS DEPORTIVOS
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/eventos" 
                  state={{ categoria: 'sociales' }}
                  className={() => location.state?.categoria === 'sociales' && isEventosActive ? 'menu-link active-link' : 'menu-link'} 
                  onClick={closeMenu}
                >
                  EVENTOS SOCIALES
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/eventos" 
                  state={{ categoria: 'promocion' }}
                  className={() => location.state?.categoria === 'promocion' && isEventosActive ? 'menu-link active-link' : 'menu-link'} 
                  onClick={closeMenu}
                >
                  PROMOCIÓN DEL TAEKWONDO
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/examenes" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              EXÁMENES
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              CATÁLOGO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactanos" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              CONTÁCTANOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/transparencia" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              TRANSPARENCIA
            </NavLink>
          </li>
          <li>
            <NavLink to="/paginasAsociadas" className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'} onClick={closeMenu}>
              PÁGINAS ASOCIADAS
            </NavLink>
          </li>
        </ul>
        <div className="menu-stripes">
          <div className="yellow"></div>
          <div className="red"></div>
        </div>
      </nav>
    </>
  );
}