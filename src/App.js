import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': 'а53858b274mshc183701b570dde1p126299jsn47fed24ded66', 
  //     'x-rapidapi-host': 'dogs-by-api-ninjas.p.rapidapi.com'
  //   }
  // };

  // const [dogData, setDogData] = useState("");
    
  // const getDogData = () => {
  //   fetch("https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=golden%20retriever")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDogData(data.message);
  //     })
  // };

  // useEffect(() => {
  //   getDogData();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
