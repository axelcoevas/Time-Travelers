import React from 'react'
import './static/Home.css'
import capsuleLogo from './resources/Capsula_Logo.png'
import create from './resources/crea.jpg'
import wish from './resources/wish.jpg'
import vr from './resources/vr.jpg'

function Home() {
  return (
    <div className="home">
      <section className="main">
        <section className="acerca-de">
          <div className="contenedor">
            <div className="foto">
              <img src={String(capsuleLogo)} width="150" height="150" alt="Time Travelers" />
            </div>
            <div className="texto">
              <h3 className="titulo">Acerca de</h3>
              <p><span className="bold">Time-Travelers</span> es un proyecto escolar,creado por estudiantes del Instituto Politécnico Nacional de la <span className="bold">Escuela Superior de Cómputo</span>, se desea implementar una interacción mixta
                    para crear cápsulas de tiempo virtuales, como innovación tenemos la implementación de <span className="bold">Realidad Virtual</span> para este proyecto.
                    </p>
            </div>
          </div>
        </section>
        <section className="publicaciones">
          <div className="publis-izquierda">
            <div className="contenedor">
              <div className="imagen-publis">
                <img src={String(create)} width="90%" height="230px" alt="Crea tu Capsula" />
              </div>
              <div className="contenedor-texto">
                <p className="titulo-publis">Crea tus propias Cápsulas del Tiempo</p>
                <p className="description">Diseña y construye de una manera realmente fácil una Cápsula del Tiempo</p>
              </div>
            </div>
          </div>
          <div className="publis-derecha">
            <div className="contenedor">
              <div className="imagen-publis">
                <img src={String(wish)} width="90%" height="230px" alt="WishList" />
              </div>
              <div className="contenedor-texto">
                <p className="titulo-publis">Crea tu WishList y recibe regalos</p>
                <p className="description">Interactua en nuestra Red Social, crea tu Wish List y envía o recibe Mini-Cápsulas de Tiempo</p>
              </div>
            </div>
          </div>
          <div className="publis-izquierda">
            <div className="contenedor">
              <div className="imagen-publis">
                <img src={String(vr)} width="90%" height="230px" alt="VR" />
              </div>
              <div className="contenedor-texto">
                <p className="titulo-publis">Participa en nuestro lanzamiento de VR</p>
                <p className="description">Disfruta de una nueva experiencia, entregando tus cápsulas de tiempo con tecnología de Realidad Virtual</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <section className="contacto">
          <div className="contenedor">
            <h3 className="titulo">Contacto</h3>
            <form className="formulario" action="">
              <input type="text" name="nombre" id="nombre" required placeholder="Nombre" />
              <input type="email" name="email" id="email" required placeholder="Correo" />
              <textarea name="mensaje" id="mensaje" placeholder="Mensaje:"></textarea>
              <input type="submit" value="Enviar" className="boton" />
            </form>
          </div>
        </section>
      </footer>
    </div>
  )
}
export default Home
