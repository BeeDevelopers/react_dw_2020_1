import React, {Component} from 'react';
import Header from './components/Header'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import Principal from './components/Principal'
//edccs

export default class App extends Component {

  render() {
    return (

      <div>
        <Header />
        <Inicio />
        <Principal/>
        <Footer />

      </div> 

    );
  }
}

