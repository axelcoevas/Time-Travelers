import React from 'react';
import './static/Footer.css'

function Footer() {
  return (
    <footer>
      <section class="redes-sociales">
        <div class="contenedor">
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="youtube"><i class="fa fa-youtube-play"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="#" class="github"><i class="fa fa-github"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;