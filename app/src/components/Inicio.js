import React, { Component } from 'react';
import Boton from './Boton'
import './css/inicio.css'

export default class Inicio extends Component {
    render() {
        return (
            <div className="inicio">
                <div className="inicio-descr">
                    <h1>Hola, mi nombre es Alan</h1>
                    <p>Estoy haciendo mi primera página web juas juas</p>
                    <br/>
                    <Boton/>
                </div>
                <img src="/img/alan.jpg" alt="Imagen de perfil" />
            </div>
        );
    }
}