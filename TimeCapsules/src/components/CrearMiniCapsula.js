import React from 'react'
import '../static/CrearMiniCapsula.css'

const CrearMiniCapsula = () => {
  return (
    <div className="crearMiniCapsula">
      <div className="cont-mini">
        <div className="heder-mini">
            <h3>Mini Capsula</h3>
        </div>
        <div className="form-mini">
            <form action="">
                <div className="filset">
                    <fieldset>
                        <legend>Nombre de la Capsula</legend>
                        <div className="label-form">
                            <p>Capsula del Tiempo</p>
                            <input name="nombre" id="nombre" type="text" tabindex="1" placeholder="Nombre.." />
                        </div>
                    </fieldset>
                </div>
                <div className="filset">
                    <fieldset>
                        <legend>Elegir Usuario</legend>
                        <div className="label-form">
                            <p>Usuario</p>
                            <select name="select">
                                <option value="value1">GabrielA</option>
                                <option value="value2" selected>IsmaelO</option>
                                <option value="value3">AxelC</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
                <div className="filset">
                    <fieldset>
                        <legend>Añadir WishList</legend>
                        <div className="label-form">
                            <p>Añadir Item</p>
                            <select name="select">
                                <option value="value1">Amazon</option>
                                <option value="value2" selected>Mercado</option>
                                <option value="value3">ClaroShop</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
                <div className="filset">
                    <fieldset>
                        <legend>Añadir Archivos</legend>
                        <div className="label-form">
                            <p>Subir Archivos</p>
                            <div className="dragAndDrop"></div>
                            <div className="btn-sub">
                                <input type="file" id="file" />
                                <label for="file">Seleccionar Archivos</label>
                                <button type="reset">Eliminar</button>
                                <button type="submit">Subir</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="filset">
                    <fieldset>
                        <legend>Añadir Fecha</legend>
                        <div className="label-form">
                            <p>Fecha de Entrega</p>
                            <input type="date" name="" id="" />
                        </div>
                    </fieldset>
                </div>
                <div className="btn-subir">
                    <button type="reset">Eliminar</button>
                    <button type="submit">Subir</button>
                </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default CrearMiniCapsula