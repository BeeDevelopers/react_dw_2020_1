import React, { Component } from 'react';
import './css/principal.css'
import Carta from './Carta'

export default class Principal extends Component {
    render() {
        return (
            <div className="principal">
                
                <Carta
                width="40%"
                height="22rem"
                title="Sobre mi"
                content="21 años.
                Soltera.
                Salamanca, Gto.
                México.
                
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam vel vehicula dui.
                Pellentesque condimentum ex porta, 
                dignissim eros vitae, pulvinar lorem.
                
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam vel vehicula dui.
                Pellentesque condimentum ex porta, 
                dignissim eros vitae, pulvinar lorem."
                >
                </Carta>
                <Carta
                width="40%"
                height="22rem"
                title="Hobbies"
                img="/img/basketball.jpg"
                />
                <Carta
                title="División de Ingenierías Campus Irapuato Salamanca"
                width="40%"
                height="8rem"
                />
                <Carta
                width="40%"
                height="24rem"
                title="Sistemas Computacionales"
                img="/img/circuito.jpeg"
                />
                <Carta
                width="40%"
                height="10rem"
                title="Contacto"
                content="Teléfono   (464) 464 6464
                E-mail   contacto@beedevelopers.dev
                "
                />
            </div>
        );
    }
}