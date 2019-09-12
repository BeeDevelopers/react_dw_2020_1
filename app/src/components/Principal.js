import React, { Component } from 'react';
import './css/principal.css'
import Carta from './Carta'

export default class Principal extends Component {
    render() {
        return (
            <div className="principal">
                <Carta
                width="40%"
                height="30rem"
                title="Sistemas Computacionales"
                img="/img/alan.jpg"
                />
                <Carta
                width="40%"
                height="10rem"
                title="Contacto"
                content="Teléfono   (464) 464 6464
                E-mail   example@ugto.mx
                "
                />
            </div>
        );
    }
}