import React from 'react'
import '../static/Tutorial.css'

const Tutorial = () => {
    return (
        <div className="Formulario">
            <div className="conteiner-tuto">
            <div className="titulo-tuto">
                <h3>Tutorial de Uso de Time-Travelers</h3>
            </div>
            <div className="video-tuto">
                <iframe width="99%" height="97%" src="https://www.youtube.com/embed/3-Z-pzxiUAs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="conte-tuto">
                <section className="row">
                    <div className="TE">
                        <h1 className="">Formato de Encuesta de Satisfacción.</h1>
                        <h2>Time Travelers.</h2>
                    </div>
                </section>
                <hr/><br />
                <section>
                    <div className="TC">
                        <h3>Capsula del Tiempo.</h3>
                        <p></p>
                    </div>
                </section>
                <section>
                    <div>
                        <p>1- ¿Que tipo de archivos puede subir en su Cápsula de Tiempo?</p>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta1" id="pregunta1a" value="SI"/> Pdf,Docs,Imagenes,Videos
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta1" id="preguntab" value="NO"/> Solo imagenes
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta1" id="preguntac" value="NA"/> Solo videos e imagenes
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta1" id="preguntad" value="NA"/> Cualquier archivo
                        </label>
                    </div>
                </section>
                <br/>
                <section>
                    <div>
                        <p>2- La fecha que ingresa, corresponde a: </p>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta2" id="pregunta1a" value="FC"/> Fecha de Creacion
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta2" id="preguntab" value="FE"/> Fecha de Entrega
                        </label>
                    </div>
                </section>
                <hr/>
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
                            <input type="radio" name="pregunta3" id="pregunta1a" value="1"/> 1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta3" id="preguntab" value="2"/> 2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta3" id="preguntac" value="NA"/> mas de 2
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
                            <input type="radio" name="pregunta4" id="pregunta1a" value="SI"/> Si
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta4" id="preguntab" value="NO"/> No
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="pregunta4" id="preguntac" value="NA"/> N/A
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
                                <select id="pregunta5" name="pregunta5">
                                    <option value="5">Muy Buena</option>
                                    <option value="4">Buena</option>
                                    <option value="3">Regular</option>
                                    <option value="2">Mala</option>
                                    <option value="1">Muy Mala</option>
                                    <option value="0">No Responde</option>
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
                                <select id="pregunta6">
                                    <option value="5">Muy Buena</option>
                                    <option value="4">Buena</option>
                                    <option value="3">Regular</option>
                                    <option value="2">Mala</option>
                                    <option value="1">Muy Mala</option>
                                    <option value="0">No Responde</option>
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
                            <textarea name="comentarios" id="comentarios" placeholder="Intresa aquí tus comentarios:"></textarea>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="btn-env-tuto">
                        <button type="button" className="">Guardar Encuesta</button>
                        <button type="button" className="" id="">Limpiar formulario</button>
                    </div>
                </section>
            </div>

            <br /><br />
        </div>
        </div>
    );
}

export default Tutorial