import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../static/Footer.css'

function Footer() {
  return (
    <footer>
      <section class="redes-sociales">
        <div class="contenedor">
          <a href="https://twitter.com" target="_blank" class="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://youtube.com" target="_blank" class="youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://facebook.com" target="_blank" class="facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://github.com" target="_blank" class="github"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://instagram.com" target="_blank" class="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;