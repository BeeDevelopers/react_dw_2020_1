import React, { Component } from 'react';
import './css/principal.css'
import Carta from './Carta'

export default class Principal extends Component {
    render() {
        return (
            <div className="principal">
                <Carta
                width="15rem"
                height="30rem"
                title="Sistemas Computacionales"
                img="/img/alan.jpg"
                />
            </div>
        );
    }
}