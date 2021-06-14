import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { db, auth } from '../firebase'
import '../static/Login.css'

function Login() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [left, setLeft] = useState(false)

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
        auth.user.updateProfile({
          displayName: username
        }).then(auth => {
          history.push("/")
        })
        return db.collection('users').doc(auth.user.uid).set({
          name: name,
          birth: birth
        })
      })
      .catch(error => alert(error.message))
  }

  const toggleAnimation = () => {
    setLeft((left) => !left)
  }

  return (
    <section className="login">
      <div className="contenedor-login">
        <div className={`container ${left ? "right-panel-active" : ""}`} id="container">
          <div className="body">
            <div className="form-container sign-up-container">
              <form id="signup-form" className="form">
                <h1>Crear Cuenta</h1>
                <div className="social-container">
                  <span className="a social icon"><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faGooglePlus} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <span className="span">O usa tu email para el registro</span>
                <input id="signup-name" className="input" type="text" placeholder="Nombre completo" value={name} onChange={e => setName(e.target.value)} />
                <input id="signup-username" className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input id="signup-birth" className="input" type="date" placeholder="Fecha de Nacimiento" value={birth} onChange={e => setBirth(e.target.value)} />
                <input id="signup-email" className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input id="signup-password" className="input" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="button" onClick={register}>Registrarme</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="form">
                <h1>Iniciar Sesión</h1>
                <div className="social-container">
                  <span className="a social icon"><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faGooglePlus} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <span className="span">o inicia sesión con tu cuenta</span>
                <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                <span className="span">Olvidaste tu contraseña?</span>
                <button type="submit" onClick={signIn} className='button'>Iniciar Sesión</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>¡Bienvenido de vuelta!</h1>
                  <p className="p">Inicia sesión con tus datos personales para acceder a las funcionalidades</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signIn">Iniciar Sesión</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>¡Hola!</h1>
                  <p className="p">Ingresa tus datos para registrarte</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signUp">Regístrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Login
