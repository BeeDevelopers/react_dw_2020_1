import React, { Component } from 'react';
import Redes from './Redes';
import './css/footer.css';

export default class Footer extends Component {

    render() {
        return (
            <div>
                <Redes />
                <div className="footer">
                    <h2>Alan Antonio Alvarez Sánchez</h2>
                    <div>
                        <p>Universidad de Guanajuato</p>
                        <p>Lic. en Sistemas Computacionales</p>
                        <p>alan@mail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}