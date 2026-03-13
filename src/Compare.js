import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie, Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Compare() {
    return (
        <div className="Compare">
            <header className="Compare-header">
                <div className='greetingContainer'>
                    <p>Compare Some, Compare All!</p>
                    <h3>Breed Comparator</h3>
                </div>
            </header>

            <div className='breedCompareContainer'>
                <div className='breedContainer'>
                    <div className='selectorContainer'>
                        <DropdownButton id="dropdown-item-button" title="Select Breed">
                            <Dropdown.ItemText>Select a Breed Below</Dropdown.ItemText>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="secondary">Select Random</Button>
                    </div>

                    <div className='breedCardsContainer'>
                        <div className='mainInfoCardContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Dog Breed Name</Card.Title>
                                
                                <Card.Img variant="top" src="holder.js/100px180" />

                                <Card.Text style={{fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', fontWeight: '400', padding: '4%' }}>
                                Max Life Expectancy: Lorem ipsum <br />
                                Min Life Expectancy: Lorem ipsum <br />
                                Max Weight (Male): Lorem ipsum <br />
                                Max Weight (Female): Lorem ipsum <br />
                                Max Height (Male): Lorem ipsum <br />
                                Max Height (Female): Lorem ipsum.
                                </Card.Text>
                            </Card>  
                        </div>

                        <div className='maintenanceContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Maintenance</Card.Title>
                                
                                <div className='pieChart'>
                                    <p>Pie chart</p>
                                </div>
                            </Card> 
                        </div>

                        <div className='trainabilityContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Trainability & Energy</Card.Title>
                                
                                <div className='barChart'>
                                    <p>Bar chart</p>
                                </div>
                            </Card> 
                        </div>

                        <div className='behaviourContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Social & Behaviour</Card.Title>
                                
                                <div className='radarChart'>
                                    <p>Radar chart</p>
                                </div>
                            </Card> 
                        </div>    
                    </div>
                </div>

                <div className='breedContainer'>
                    <div className='selectorContainer'>
                        <DropdownButton id="dropdown-item-button" title="Select Breed">
                            <Dropdown.ItemText>Select a Breed Below</Dropdown.ItemText>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                            <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="secondary">Select Random</Button>
                    </div>

                    <div className='breedCardsContainer'>
                        <div className='mainInfoCardContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Dog Breed Name</Card.Title>
                                
                                <Card.Img variant="top" src="holder.js/100px180" />

                                <Card.Text style={{fontFamily: '"Montserrat", sans-serif', fontSize: '1rem', fontWeight: '400', padding: '4%' }}>
                                Max Life Expectancy: Lorem ipsum <br />
                                Min Life Expectancy: Lorem ipsum <br />
                                Max Weight (Male): Lorem ipsum <br />
                                Max Weight (Female): Lorem ipsum <br />
                                Max Height (Male): Lorem ipsum <br />
                                Max Height (Female): Lorem ipsum.
                                </Card.Text>
                            </Card>  
                        </div>

                        <div className='maintenanceContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Maintenance</Card.Title>
                                
                                <div className='pieChart'>
                                    <p>Pie chart</p>
                                </div>
                            </Card> 
                        </div>

                        <div className='trainabilityContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Trainability & Energy</Card.Title>
                                
                                <div className='barChart'>
                                    <p>Bar chart</p>
                                </div>
                            </Card> 
                        </div>

                        <div className='behaviourContainer'>
                            <Card style={{ width: '35rem', backgroundColor: '#9A72A6', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px', marginBottom: '24px', padding: '4%' }}>
                                <Card.Title>Social & Behaviour</Card.Title>
                                
                                <div className='radarChart'>
                                    <p>Radar chart</p>
                                </div>
                            </Card> 
                        </div>    
                    </div>
                </div>
            </div>
        </div>            
    );
    }

export default Compare;