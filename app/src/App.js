import React, {Component} from 'react';
import Header from './components/Header'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
//edccs

export default class App extends Component {

  render() {
    return (

      <div>
        <Header />
        <Inicio />
        <Footer />

      </div> 

    );
  }
}

