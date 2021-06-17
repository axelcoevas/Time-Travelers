import React from 'react';
import '../static/MisCapsulas.css'
import capsule1 from '../resources/mini mai.jpg'
import { Link } from 'react-router-dom'

function MisCapsulas1() {
  return (
    <div className="MisCapsulas">
      <div className="cont-all-misCapsulas">
        <div className="tit-misCapsulas">
          <h3>Mis Capsulas</h3>
        </div>
        <div className="cont-misCapsulas">
          <div className="container-misCapsulas"> 
            <div className="item-misCapsulas">
              <span className="etiquetaA">
                <img src={capsule1} alt="" className="item-img" />
                <div className="item-text">
                  <h3>Mi Primer Cápsula</h3>
                  <p>Recuerdos Personales de la infancia y juventud</p>
                </div>
              </span>
            </div> 
            {/*
            <div className="item-misCapsulas">
              <span className="etiquetaA">
                <img src={capsule1} alt="" className="item-img" />
                <div className="item-text">
                  <h3>Capsula 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </span>
            </div>
            <div className="item-misCapsulas">
              <span className="etiquetaA">
                <img src={capsule1} alt="" className="item-img" />
                <div className="item-text">
                  <h3>Capsula 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </span>
            </div>
            */}
          </div>
          <div className="button-misCapsulas">
            <Link to="./CrearCapsula"><button>Nueva Capsula</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisCapsulas1;