import React from 'react'
import './static/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useSateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
  const [{ basket, user }] = useSateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <header>
        <div className="contenedor">
          <nav className="menu">
            <Link to="/">
              <a className="menu-link">Acerca De</a>
            </Link>
            <a href="#" className="menu-link">Tutorial</a>
            <a href="crearCapsula.html" className="menu-link">Crear Cápsula</a>
            <a href="#" className="menu-link">Red Social</a>
            <a href="#" className="menu-link">Contacto</a>
            <Link to={!user && '/login'}>
              <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineTwo">
                  {user ? 'Cerrar sesión' : 'Login'}
                </span>
              </div>
            </Link>
          </nav>
          <div className="contenedor-texto">
            <div className="texto">
              <h1 className="nombre">Time-Travelers</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
