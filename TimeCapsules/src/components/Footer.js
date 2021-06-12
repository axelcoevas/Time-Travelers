import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../static/Footer.css'

function Footer() {
  return (
    <footer>
      <section className="redes-sociales">
        <div className="contenedor">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;