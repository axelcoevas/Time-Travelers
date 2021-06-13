import React from 'react';
import '../static/RedSocialPerfil.css'
import amazon from '../resources/amazon.png'
import mercadolibre from '../resources/mercado.png'
import claro from '../resources/claro.png'
import nike from '../resources/nike.jpg'
import perfil from '../resources/perfil.jpg'

function RedSocialPerfil() {
  return (
    <div className="Perfil">
      <div className="cont-all">
        <div className="usuario-perfil">
          <div className="img-usuario">
            <img src={perfil} alt="Usuario" width="230" height="230" />
          </div>
          <div className="datos-usuario">
            <p>Nombre: </p>
            <label>Gabriel</label>
            <p>Usuario: </p>
            <label>Gabo001</label>
            <p>Correo:</p>
            <label>jarzatel1400@alumno.ipn.mx</label>
            <p>Fecha de Nacimiento: </p>
            <label>16 - Julio - 1999</label>
          </div>
        </div>
        <div className="publicaciones-perfil">
          <div className="title-wish">
            <p>Mi WishList</p>
          </div>
          <hr className="linea2" />
          <div className="wish">
            <div className="galeria">
              <div className="foto">
                <img src={amazon} alt="Amazon"></img>
              </div>
            </div>
            <div className="galeria">
              <div className="foto">
                <img src={mercadolibre} alt="MercadoLibre"></img>
              </div>
            </div>
            <div className="galeria">
              <div className="foto">
                <img src={claro} alt="claro"></img>
              </div>
            </div>
            <div className="galeria">
              <div className="foto">
                <img src={nike} alt="nike"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedSocialPerfil;