import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { auth } from '../firebase'
import '../static/Login.css'
import FileUpload from './FileUpload'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [left, setLeft] = useState(false);

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

  const toggleAnimation = () => {
    setLeft((left) => !left)
  }

  return (
    <section className="login">
      <div className="contenedor-login">
        <div className={`container ${left ? "right-panel-active" : ""}`} id="container">
          <div className="body">
            <div className="form-container sign-up-container">
              <form class="form" action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                  <a href="#" className="a social"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="a social"><FontAwesomeIcon icon={faGooglePlus} /></a>
                  <a href="#" className="a social"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <span>or use your email for registration</span>
                <input className="input" type="text" placeholder="Name" />
                <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="button" onClick={register}>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="form" action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="a social"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="a social"><FontAwesomeIcon icon={faGooglePlus} /></a>
                  <a href="#" className="a social"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <span>or use your account</span>
                <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <a href="#">Forgot your password?</a>
                <button type="submit" onClick={signIn} className='button'>Sign in</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signUp">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FileUpload />
    </section >
  )
}

export default Login
