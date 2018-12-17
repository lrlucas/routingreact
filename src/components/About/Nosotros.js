import React, {Component} from 'react';
import './Nosotros.css';


export default class Nosotros extends Component {

    state = {};


    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="./img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium consectetur, doloremque necessitatibus sunt temporibus vitae?
                        Asperiores ducimus eligendi enim facere fuga illo incidunt magnam
                        non optio quia repellendus sunt, voluptate.</p>

                </div>
            </div>
        )
    }

}
