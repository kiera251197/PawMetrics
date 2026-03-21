import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LineChart from './components/LineChartTimeline';
import Footer from './components/Footer';
import DogDropdown from './components/DogDropdown';


function Timeline() {
    const [dogData, setDogData] = useState(null);
    
    return (
        <div className="Timeline">
            <div className='timelineContainer'>
                <header className="Timeline-header">
                    <div className='greetingContainer'>
                        <p>Compare Patterns. Spot Differences. Understand Breeds Better</p>
                        <h3>Comparative Timeline</h3>
                    </div>
                </header> 

                <div className='selectorContainer'>
                    <DogDropdown label="Select Breed" onSelectBreed={(data) => setDogData(data)} />
                </div>

                <Card id='timelineCard'>
                    <LineChart dogData={dogData}/>
                </Card>   
            </div>
            <Footer />
        </div>            
    );
    }

export default Timeline;