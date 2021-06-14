import React from 'react';
import '../static/RedSocialPerfil.css'
import amazon from '../resources/amazon.png'
import mercadolibre from '../resources/mercado.png'
import claro from '../resources/claro.png'
import nike from '../resources/nike.jpg'
import defaultProfilePicture from '../resources/perfil.jpg'
import { useSateValue } from '../StateProvider';

function RedSocialPerfil() {
  const [{ user, userData }] = useSateValue();

  console.log(user)

  const profilePicture = defaultProfilePicture



  return (
    <div className="Perfil">
      <div className="cont-all">
        <div className="usuario-perfil">
          <div className="profile-picture">
            <img src={profilePicture} alt="Time Travelers" />
          </div>
          <div className="datos-usuario">
            <p>Nombre: </p>
            <label>{userData?.name}</label>
            <p>Usuario: </p>
            <label>{user?.displayName}</label>
            <p>Correo:</p>
            <label>{user?.email}</label>
            <p>Fecha de Nacimiento: </p>
            <label>{userData?.birth}</label>
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