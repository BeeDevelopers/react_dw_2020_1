import React, { Component } from 'react';
import './css/principal.css'
import Carta from './Carta'

export default class Principal extends Component {
    render() {
        return (
            <div className="principal">
                
                <Carta
                width="40%"
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
                img="/img/alan.jpg"
                />
                <Carta
                title="División de Ingenierías Campus Irapuato Salamanca"
                width="40%"
                height="8rem"
                />
                <Carta
                width="40%"
                height="22rem"
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