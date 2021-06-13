import React from 'react';
import '../static/RedSocialWishList.css'
import amazon from '../resources/amazon.png'
import mercadolibre from '../resources/mercado.png'
import claro from '../resources/claro.png'
import nike from '../resources/nike.jpg'

function RedSocialWishList() {
  return (
    <div className="WishList">
        <div className="cont-all-wishlist">
                <div className="publicaciones">
                    <div className="title-wish">
                        <p>Mi WishList</p>
                    </div>
                    <hr />
                    <div className="wish">
                        <select name="select">
                            <option value="value1">Amazon</option>
                            <option value="value2" selected>Mercado Libre</option>
                            <option value="value3">Claro Shop</option>
                            <option value="value3">Nike</option>
                        </select>
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
                    <div className="btn-wish">
                        <button>Editar</button>
                        <button>Borrar</button>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default RedSocialWishList;