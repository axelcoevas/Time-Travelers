import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../static/CrearCapsula.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const MyUploader = () => {
    const getUploadParams = ({meta}) => {return {url: 'https://httpbin.org/post'}}
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f=>f.meta))
        allFiles.forEach(f=>f.remove())
    }
    return(
        <Dropzone 
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleChangeStatus}
                accept="image/*,audio/*,video/*,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.tsv,.ppt,.pptx,.pages,.odt,.rtf"
                />
    )
}

function CrearCapsula() {
  return (
    <div className="crearCapsula">  
        <div className="contenedor-crearCapsula">
            <form className="formulario">
                <p className="sub_titulo">Crear tu Cápsula del Tiempo: <input type="text" name="titulo" id="titulo"/></p>
                <p className="sub_mensaje">Sube aquí tus archivos</p>
                <div className="Dropzone">
                <MyUploader />
                </div>
                <p className="sub_mensaje">Mensaje de Entrega:</p>
                <textarea name="mensaje" id="mensaje" placeholder="Ingresa aquí tu mensaje de entrega"></textarea>
                <p className="sub_mensaje">Selecciona la Fecha de Entrega:</p><br/>
                <input className="fecha" type="date" name="day" />
                <p className="sub_correo">Ingrese los Correos de sus Destinatarios:</p>
                <input type="email" className="correos" name="correos" id="correos" placeholder="Agregar Correo:" /><br/>
                <div className="centrarBoton">
                    <input className="BotonEnv" type="submit" value="Enviar Capsula"/> 
                </div>
            </form>
        </div>
    </div>
  );
}

export default CrearCapsula;