import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { db } from '../firebase'
import create from '../resources/crea.jpg'
import wish from '../resources/wish.jpg'
import vr from '../resources/vr.jpg'
import '../static/Home.css'

function Home() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const history = useHistory();

  const submitForm = () => {
    if (name && email && message) {
      return db
        .collection('contact')
        .add({
          name: name,
          email: email,
          message: message
        })
        .then(() => {
          swal({
            title: "Bien!",
            text: "Tu mensaje se ha enviado con éxito",
            icon: "success",
            button: ";)",
          })
            .then(() => {
              history.go(0)
            })
        })
        .catch((error) => {
          swal("Ha ocurrido un error: ", error)
        })
    } else {
      swal("Debes llenar todo el formulario")
    }
  }

  return (
    <div className="home">
      <section className="main-home">
        <section className="acerca-de-home">
          <div className="contenedor-home">
            <div className="texto">
              <h3 className="titulo">Acerca de</h3>
              <p><span className="bold">Time-Travelers</span> es un proyecto escolar,creado por estudiantes del Instituto Politécnico Nacional de la <span className="bold">Escuela Superior de Cómputo</span>, se desea implementar una interacción mixta
                para crear cápsulas de tiempo virtuales, como innovación tenemos la implementación de <span className="bold">Realidad Virtual</span> para este proyecto.
              </p>
            </div>
          </div>
        </section>
        <section className="publicaciones-home">
          <div className="publis-izquierda">
            <div className="contenedor-home">
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
            <div className="contenedor-home">
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
            <div className="contenedor-home">
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
          <div className="contenedor-home">
            <h3 className="titulo">Contacto</h3>
            <form className="formulario" action="">
              <input type="text" name="nombre" id="nombre" required placeholder="Nombre" onChange={e => setName(e.target.value)} />
              <input type="email" name="email" id="email" required placeholder="Correo" onChange={e => setEmail(e.target.value)} />
              <textarea name="mensaje" id="mensaje" placeholder="Mensaje:" onChange={e => setMessage(e.target.value)} ></textarea>
              <input type="button" value="Enviar" className="boton" onSubmit={submitForm} />
            </form>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Home
