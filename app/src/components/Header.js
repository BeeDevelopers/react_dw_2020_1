import React, { Component } from 'react';
import './css/header.css'

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <p className="titulo">Tu primer sitio web con React.js</p>
            </header>            
        );
    }
}