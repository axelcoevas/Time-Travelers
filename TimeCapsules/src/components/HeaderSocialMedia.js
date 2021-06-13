import React from 'react'
import { Link } from 'react-router-dom'
import capsuleLogo from '../resources/Capsula_Logo.png'
import '../static/Header.css'

function HeaderSocialMedia() {
  return (
    <div>
      <header>
        <div className="contenedor">
          <nav className="menu">
            <Link to="/RedSocial">
              <span className="menu-link">Inicio</span>
            </Link>
            <Link to="/CrearMiniCapsula">
              <span className="menu-link">Crear Minicápsula</span>
            </Link>
            <Link to="/RedSocialWishList">
              <span className="menu-link">Mi Wishlist</span>
            </Link>
            <Link to="/RedSocialPerfil">
              <span className="menu-link">Mi Perfil</span>
            </Link>
            <Link to="/">
              <span className="menu-link">Regresar</span>
            </Link>
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

export default HeaderSocialMedia
