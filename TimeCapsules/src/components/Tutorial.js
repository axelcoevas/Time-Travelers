import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { db } from '../firebase'
import '../static/Tutorial.css'

const Tutorial = () => {
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();
  const [q6, setQ6] = useState();
  const [comments, setComments] = useState('');
  const history = useHistory();

  const submitForm = () => {
    if (q1 && q2 && q3 && q4 && q5 && q6) {
      return db
        .collection('quiz')
        .add({
          question1: q1,
          question2: q2,
          question3: q3,
          question4: q4,
          question5: q5,
          question6: q6,
          comments: comments
        })
        .then(() => {
          swal({
            title: "Bien!",
            text: "La encuesta se ha enviado con éxito",
            icon: "success",
            button: ";)",
          })
            .then(() => {
              history.go(0)
            })
        })
        .catch((error) => {
          swal("Ha ocurrido un error")
        })

    } else {
      swal("Debes llenar todas las respuestas de opción múltiple")
    }
  }

  const cleanForm = () => {
    document.getElementById("form").reset();
  }

  return (
    <div className="Formulario">
      <div className="conteiner-tuto">
        <div className="titulo-tuto">
          <h3>Tutorial de Uso de Time-Travelers</h3>
        </div>
        <div className="video-tuto">
          <iframe width="99%" height="97%" src="https://www.youtube.com/embed/3-Z-pzxiUAs"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <div className="conte-tuto">
          <section className="row">
            <div className="TE">
              <h1 className="">Formato de Encuesta de Satisfacción.</h1>
              <h2>Time Travelers.</h2>
            </div>
          </section>
          <hr /><br />
          <section>
            <div className="TC">
              <h3>Capsula del Tiempo.</h3>
              <p></p>
            </div>
          </section>
          <form id="form">
            <section>
              <div>
                <p>1- ¿Que tipo de archivos puede subir en su Cápsula de Tiempo?</p>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta1" id="pregunta1a" value="Pdf,Docs,Imagenes,Videos" onChange={e => setQ1(e.target.value)} /> Pdf,Docs,Imagenes,Videos
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta1" id="preguntab" value="Solo imagenes" onChange={e => setQ1(e.target.value)} /> Solo imagenes
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta1" id="preguntac" value="Solo videos e imagenes" onChange={e => setQ1(e.target.value)} /> Solo videos e imagenes
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta1" id="preguntad" value="Cualquier archivo" onChange={e => setQ1(e.target.value)} /> Cualquier archivo
                </label>
              </div>
            </section>
            <br />
            <section>
              <div>
                <p>2- La fecha que ingresa, corresponde a: </p>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta2" id="pregunta1a" value="Fecha de Creacion" onChange={e => setQ2(e.target.value)} /> Fecha de Creacion
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta2" id="preguntab" value="Fecha de Entrega" onChange={e => setQ2(e.target.value)} /> Fecha de Entrega
                </label>
              </div>
            </section>
            <hr />
            <section>
              <div className="TC">
                <h3>Mini Capsula</h3>
                <p></p>
              </div>
            </section>

            <section>
              <div>
                <p>3- ¿A cuantos usuarios se puede compartir una mini capsula?</p>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta3" id="pregunta1a" value="1" onChange={e => setQ3(e.target.value)} /> 1
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta3" id="preguntab" value="2" onChange={e => setQ3(e.target.value)} /> 2
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta3" id="preguntac" value="mas de 2" onChange={e => setQ3(e.target.value)} /> mas de 2
                </label>
              </div>
            </section>
            <hr />
            <section>
              <div className="TC">
                <h3>Red Social.</h3>
                <p></p>
              </div>
            </section>
            <section>
              <div>
                <p>4- ¿Se pueden ver las WishList de otros usuarios?</p>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta4" id="pregunta1a" value="Si" onChange={e => setQ4(e.target.value)} /> Si
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta4" id="preguntab" value="No" onChange={e => setQ4(e.target.value)} /> No
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pregunta4" id="preguntac" value="N/A" onChange={e => setQ4(e.target.value)} /> N/A
                </label>
              </div>
            </section>
            <br />
            <hr />
            <section>
              <div className="TC">
                <h3>Satisfacción General.</h3>
                <p></p>
              </div>
            </section>
            <section>
              <div>
                <section>
                  <div>
                    <p>5- ¿Cómo calificaría su experiencia con Time-Travelers?</p>
                  </div>
                  <div>
                    <select id="pregunta5" name="pregunta5" onChange={e => setQ5(e.target.value)}>
                      <option value="Muy Buena">Muy Buena</option>
                      <option value="Buena">Buena</option>
                      <option value="Regular">Regular</option>
                      <option value="Mala">Mala</option>
                      <option value="Muy Mala">Muy Mala</option>
                      <option value="No Responde">No Responde</option>
                    </select>
                  </div>
                </section>
              </div>
            </section><br />
            <section>
              <div>
                <section>
                  <div>
                    <p>6- ¿Recomendaria a sus familiares y amigos?</p>
                  </div>
                  <div>
                    <select id="pregunta6" onChange={e => setQ6(e.target.value)}>
                      <option value="Muy Buena">Muy Buena</option>
                      <option value="Buena">Buena</option>
                      <option value="Regular">Regular</option>
                      <option value="Mala">Mala</option>
                      <option value="Muy Mala">Muy Mala</option>
                      <option value="No Responde">No Responde</option>
                    </select>
                  </div>
                </section>
              </div>
            </section><br />
            <hr />
            <section>
              <div className="TC">
                <h3>Comentarios.</h3>
                <p></p>
              </div>
            </section>
            <section>
              <div>
                <div>
                  <textarea name="comentarios" id="comentarios" placeholder="Intresa aquí tus comentarios:" onChange={e => setComments(e.target.value)}></textarea>
                </div>
              </div>
            </section>
            <section>
              <div className="btn-env-tuto">
                <button type="button" className="" onClick={submitForm}>Guardar Encuesta</button>
                <button type="button" className="" id="" onClick={cleanForm}>Limpiar formulario</button>
              </div>
            </section>
          </form>
        </div>
        <br /><br />
      </div>
    </div>
  );
}

export default Tutorial