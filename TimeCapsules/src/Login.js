import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './static/Login.css'
import { auth } from './firebase'
import capsuleLogo from './resources/Capsula_Logo.png'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <section className="main">
      <section className="acerca-de">
        <div className="contenedor">
          <div className="foto">
            <img src={String(capsuleLogo)} width="150" height="150" alt="Time Travelers" />
          </div>
        </div>
      </section>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar</p>
            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse">Regístrarse</button>
          </div>
        </div>
        <div className="contenedor__login-register">
          <form action="" className="formulario__login">
            <h2>Iniciar Sesión</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo Electrónico" />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
            <button type="submit" onClick={signIn}>Entrar</button>
          </form>
          <form action="" className="formulario__register">
            <h2>Regístrarse</h2>
            <input type="text" placeholder="Nombre completo" />
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo Electrónico" />
            <input type="text" placeholder="Usuario" />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
            <button onClick={register}>Registrarse</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
