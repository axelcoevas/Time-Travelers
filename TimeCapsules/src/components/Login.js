import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { db, auth } from '../firebase'
import '../static/Login.css'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
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
        return db.collection('users').doc(auth.user.uid).set({
          name: name
        })
      })
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
              <form id="signup-form" class="form">
                <h1>Create Account</h1>
                <div className="social-container">
                  <span className="a social icon"><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faGooglePlus} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <span className="span">or use your email for registration</span>
                <input id="signup-name" className="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input id="signup-email" className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input id="signup-password" className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="button" onClick={register}>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="form">
                <h1>Sign in</h1>
                <div className="social-container">
                  <span className="a social icon"><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faGooglePlus} /></span>
                  <span className="a social icon"><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <span className="span">or use your account</span>
                <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <span className="span">Forgot your password?</span>
                <button type="submit" onClick={signIn} className='button'>Sign in</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p className="p">To keep connected with us please login with your personal info</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p className="p">Enter your personal details and start journey with us</p>
                  <button className="button ghost" onClick={toggleAnimation} id="signUp">Sign Up</button>
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
