import React from 'react';
import '../static/MisCapsulas.css'
import capsule1 from '../resources/vr.jpg'
import { Link } from 'react-router-dom'

function MisCapsulas() {
    return (
        <div className="MisCapsulas">
        <div className="cont-all-misCapsulas">
        <div className="tit-misCapsulas">
            <h3>Mis Capsulas</h3>
        </div>
        <div className="cont-misCapsulas">
            <div className="container-misCapsulas">
                <div className="item-misCapsulas">
                    <a href="" className="etiquetaA">
                        <img src={capsule1} alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        </a>
                </div>
                <div className="item-misCapsulas">
                    <a href="" className="etiquetaA">
                        <img src={capsule1} alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        </a>
                </div>
                <div className="item-misCapsulas">
                    <a className="etiquetaA">
                        <img src={capsule1} alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="button-misCapsulas">
               <Link to="./CrearCapsula"><button>Nueva Capsula</button></Link>
            </div>
        </div>
    </div>
    </div>
    );
}
    
export default MisCapsulas;