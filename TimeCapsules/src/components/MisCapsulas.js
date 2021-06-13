import React from 'react';
import '../static/MisCapsulas.css'

function MisCapsulas() {
    return (
        <div className="cont-all-misCapsulas">
        <div className="tit-misCapsulas">
            <h3>Mis Capsulas</h3>
        </div>
        <div className="cont-misCapsulas">
            <div className="container-misCapsulas">
                <div className="item">
                    <a href="" style="text-decoration: none;">
                        <img src="img/vr.jpg" alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        </a>
                </div>
                <div className="item">
                    <a href="" style="text-decoration: none;">
                        <img src="img/vr.jpg" alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        </a>
                </div>
                <div className="item">
                    <a href="" style="text-decoration: none;">
                        <img src="img/nike.jpg" alt="" className="item-img"/>
                        <div className="item-text">
                            <h3>Capsula 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="button">
                <button>Nueva Capsula</button>
            </div>
        </div>
    </div>
    );
}
    
export default MisCapsulas;