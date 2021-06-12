import React from 'react'
import { Link } from 'react-router-dom'
import { useSateValue } from '../StateProvider'
import { auth } from '../firebase'
import capsuleLogo from '../resources/Capsula_Logo.png'
import '../static/Header.css'

function Header() {
  const [{ user }] = useSateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div>
      <header>
        <div className="contenedor">
          <nav className="menu">
            <Link to="/">
              <span className="menu-link">Acerca De</span>
            </Link>
            <Link to={user ? "/" : "/login"}>
              <span onClick={handleAuthentication} className="menu-link">{user ? "Cerrar Sesión" : "Login"}</span>
            </Link>
            <span className="menu-link">Tutorial</span>
            <Link to="/CrearCapsula">
              <span className="menu-link">Crear Cápsula</span>
            </Link>
            <span className="menu-link">Red Social</span>
            <Link to="/">
              <span className="menu-link">Contacto</span></Link>
          </nav>
          <div className="contenedor-texto">
            <div className="texto">
              <h1 className="nombre">Time-Travelers</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="main">
        <section className="acerca-de">
          <div className="contenedor">
            <div className="foto">
              <img src={String(capsuleLogo)} width="150" height="150" alt="Time Travelers" />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Header
