import React from 'react'
import { Link } from 'react-router-dom'
import { useSateValue } from '../StateProvider'
import { db, auth } from '../firebase'
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
        <div class="contenedor">
          <nav class="menu">
            <Link to="/">
              <a class="menu-link">Acerca De</a>
            </Link>
            <Link to={user ? "/" : "/login"}>
              <a onClick={handleAuthentication} class="menu-link">{user ? "Cerrar Sesión" : "Login"}</a>
            </Link>
            <a href="#" class="menu-link">Tutorial</a>
            <Link to="/CrearCapsula">
              <a class="menu-link">Crear Cápsula</a>
            </Link>
            <a href="#" class="menu-link">Red Social</a>
            <Link to="/"><a class="menu-link">Contacto</a></Link>
          </nav>
          <div class="contenedor-texto">
            <div class="texto">
              <h1 class="nombre">Time-Travelers</h1>
            </div>
          </div>
        </div>
      </header>
      <section class="main">
        <section class="acerca-de">
          <div class="contenedor">
            <div class="foto">
              <img src={String(capsuleLogo)} width="150" height="150" alt="Time Travelers" />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Header
