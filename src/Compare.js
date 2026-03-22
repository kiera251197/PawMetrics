import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DogDropdown from './components/DogDropdown';
import RandomDogButton from './components/RandomDogButton';
import PieChart from './components/PieChartCompare';
import BarChart from './components/BarGraphCompare';
import PolarAreaChart from './components/PolarAreaCompare';

ChartJS.register(ArcElement, Tooltip, Legend);

function Compare() {
    const [dog1, setDog1] = useState(null);
    const [dog2, setDog2] = useState(null);

    return (
        <div className="Compare">

            <div className='compareContainer'>
                <header className="Compare-header">
                    <div className='greetingContainer'>
                        <p>Compare Some, Compare All!</p>
                        <h3>Breed Comparator</h3>
                    </div>
                </header>

                <div className='breedCompareContainer'>
                    <div className='breedContainer'>
                        <div className='selectorContainer'>
                            <DogDropdown label="Select Breed" onSelectBreed={(data) => setDog1(data)} />

                            <RandomDogButton onDogSelected={(data) => setDog1(data)}/>
                        </div>

                        <div className='breedCardsContainer'>
                            <div className='mainInfoCardContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>{dog1?.name}</Card.Title>
                                    
                                    <Card.Img variant="top" src={dog1?.image_link} alt={dog1?.name} style={{ borderRadius: '1rem' }}/>

                                    <Card.Text style={{fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', fontWeight: '400', padding: '4%' }}>
                                    <li>Min Life Expectancy: {dog1?.min_life_expectancy} years</li>
                                    <li>Max Life Expectancy: {dog1?.max_life_expectancy} years</li>
                                    <li>Min Weight (Male): {dog1?.min_weight_male || "N/A"} lbs</li>
                                    <li>Min Weight (Female): {dog1?.min_weight_female || "N/A"} lbs</li>
                                    <li>Max Weight (Male): {dog1?.max_weight_male || "N/A"} lbs</li>  
                                    <li>Max Weight (Female): {dog1?.max_weight_female || "N/A"} lbs</li>
                                    <li>Min Height: {dog1?.min_height_male || "N/A"} inches</li>  
                                    <li>Max Height: {dog1?.max_height_male || "N/A"} inches</li>  
                                    </Card.Text>
                                </Card>  
                            </div>

                            <div className='maintenanceContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Maintenance</Card.Title>
                                    
                                    <div className='pieChart'>
                                        <PieChart dogData={dog1}/>
                                    </div>
                                </Card> 
                            </div>

                            <div className='trainabilityContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Trainability & Energy</Card.Title>
                                    
                                    <div className='barChart'>
                                        <BarChart dogData={dog1} />
                                    </div>
                                </Card> 
                            </div>

                            <div className='behaviourContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Social & Behaviour</Card.Title>
                                    
                                    <div className='radarChart'>
                                        <PolarAreaChart dogData={dog1} />
                                    </div>
                                </Card> 
                            </div>    
                        </div>
                    </div>








                    <div className='breedContainer'>
                        <div className='selectorContainer'>
                            <DogDropdown label="Select Breed" onSelectBreed={(data) => setDog2(data)} />

                            <RandomDogButton onDogSelected={(data) => setDog2(data)} />
                        </div>

                        <div className='breedCardsContainer'>
                            <div className='mainInfoCardContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>{dog2?.name}</Card.Title>
                                    
                                    <Card.Img variant="top" src={dog2?.image_link} alt={dog2?.name} style={{ borderRadius: '1rem' }}/>

                                    <Card.Text style={{fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', fontWeight: '400', padding: '4%' }}>
                                    <li>Min Life Expectancy: {dog2?.min_life_expectancy} years</li>
                                    <li>Max Life Expectancy: {dog2?.max_life_expectancy} years</li>
                                    <li>Min Weight (Male): {dog2?.min_weight_male || "N/A"} lbs</li>
                                    <li>Min Weight (Female): {dog2?.min_weight_female || "N/A"} lbs</li>
                                    <li>Max Weight (Male): {dog2?.max_weight_male || "N/A"} lbs</li>  
                                    <li>Max Weight (Female): {dog2?.max_weight_female || "N/A"} lbs</li>
                                    <li>Min Height: {dog2?.min_height_male || "N/A"} inches</li>  
                                    <li>Max Height: {dog2?.max_height_male || "N/A"} inches</li>  
                                    </Card.Text>
                                </Card>  
                            </div>

                            <div className='maintenanceContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Maintenance</Card.Title>
                                    
                                    <div className='pieChart'>
                                        <PieChart dogData={dog2}/>
                                    </div>
                                </Card> 
                            </div>

                            <div className='trainabilityContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Trainability & Energy</Card.Title>
                                    
                                    <div className='barChart'>
                                        <BarChart dogData={dog2} />
                                    </div>
                                </Card> 
                            </div>

                            <div className='behaviourContainer'>
                                <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                    <Card.Title>Social & Behaviour</Card.Title>
                                    
                                    <div className='polarChart'>
                                        <PolarAreaChart dogData={dog2} />
                                    </div>
                                </Card> 
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <Footer />    
        </div>            
    );
    }

export default Compare;