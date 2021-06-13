import React from 'react';
import '../static/RedSocial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import amazon from '../resources/amazon.png'
import mercadolibre from '../resources/mercado.png'
import claro from '../resources/claro.png'
import nike from '../resources/nike.jpg'
import perfil from '../resources/perfil.jpg'
import apple from '../resources/apple.jpg'
import samsung from '../resources/samsung.jpg'
import huawei from '../resources/huaawei.png'
import sony from '../resources/sony.webp'
import adidas from '../resources/adidas.jpg'

function RedSocial() {
  return (
        <div className="RedSocial">
            <div className="search">
        <form action="miAccion">
            <input type="search" />
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>

    </div>
    <div className="cont-all-red">
        <div className="usuario-red">
            <div className="datos-usuario">
                <div className="head"></div>
                <p><FontAwesomeIcon icon={faUser} />Usuario :</p>
                <p>........</p>
            </div>
            <div className="datos-usuario">
            </div>
        </div>
        <div className="publicaciones-red">
            <div className="publi">
                <h2>Publicaciones</h2>
            </div>
            <div className="wish">
                <div className="wish1">
                    <div className="foto">
                        <img src={perfil} alt="User" width="112px" height="112px"/>
                    </div>
                    <div className="user-red">
                        <p>GabrielA</p>
                    </div>
                </div>
                <div className="wishList">
                    <div className="tit-wish">
                        <p>WishList</p>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={amazon}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={mercadolibre}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={claro}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={nike}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wish">
                <div className="wish2">
                    <div className="foto">
                        <img src={perfil} alt="User" width="112px" height="112px"/>
                    </div>
                    <div className="user-red">
                        <p>IsmaelO</p>
                    </div>
                </div>
                <div className="wishList2">
                    <div className="tit-wish">
                        <p>WishList</p>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={samsung}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={huawei}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={amazon}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={nike}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wish">
                <div className="wish3">
                    <div className="foto">
                        <img src={perfil} alt="User" width="112px" height="112px"/>
                    </div>
                    <div className="user-red">
                        <p>AxelC</p>
                    </div>
                </div>
                <div className="wishList3">
                    <div className="tit-wish">
                        <p>WishList</p>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={sony}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={adidas}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={claro}></img>
                        </div>
                    </div>
                    <div className="galeria">
                        <div className="foto">
                            <img src={apple}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default RedSocial;