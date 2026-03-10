import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard';
import Compare from './Compare';
import Timeline from './Timeline';
import Footer from './components/Footer';

function App() {

  //State to hold dog breed data
    const [getDogData, setDogData] = useState([]);
    
    const apiKey = '1HybSEWSnGuFyrTvu2kPvfZHSTLqJvCjCUZCRvog';
    const apiHost = 'dogs-by-api-ninjas.p.rapidapi.com';

    useEffect(() => {
        // Fetch dog breed data from the API
        fetch('https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs')
            .then(response => response.json())
            .then((data) => {
                setDogData(data);
            });
            
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}

export default App;
