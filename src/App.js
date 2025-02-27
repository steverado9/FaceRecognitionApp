import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-particles";

import './App.css';

const options = {
  /* custom options */
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles options={options} init={this.customInit} />;
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
