import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import './App.css';
import axios from "axios";


const API_KEY = "3a90307dd0544995913b1f6b334b4d96"; // Put your API key here!

class App extends Component {
  constructor() {
    super();
    this.state = {
      input : ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    //face detection model
     // This function asks Clarifai to find faces
  const detectFaces = async () => {
    try {
      const response = await axios.post(
        "https://api.clarifai.com/v2/models/face-detection/outputs",
        {
          headers: { Authorization: `Key ${API_KEY}`, "Content-Type": "application/json" }
        }
      );
      console.log(response);
      
      
    } catch (error) {
      console.error("Error detecting faces:", error);
    }
  };

    
  }

  render() {
    return (
      <div className="App">
        <ParticleBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange ={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
      {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
