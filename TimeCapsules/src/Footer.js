import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './static/Footer.css'

function Footer() {
  return (
    <footer>
      <section class="redes-sociales">
        <div class="contenedor">
          <a href="#" class="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" class="youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#" class="facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" class="github"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" class="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;