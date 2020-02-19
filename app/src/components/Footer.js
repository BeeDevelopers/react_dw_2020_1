import React, { Component } from 'react';
import './css/redes.css';

export default class Footer extends Component {

    render() {
        return (
            <div className="redes">
                <a href="https://www.facebook.com/">
                    <img src="/img/facebook.svg" alt="facebook" className="icono"></img>
                </a>
                <a href="https://www.instagram.com/">
                    <img src="/img/instagram.svg" alt="instagram" className="icono"></img>
                </a>
                <a href="https://www.twitter.com/">
                    <img src="/img/twitter.svg" alt="twitter" className="icono"></img>
                </a>
                <a href="https://www.youtube.com/">
                    <img src="/img/youtube.svg" alt="youtube" className="icono"></img>
                </a>
            </div>
        );
    }
}