import './App.css';
import Logo from './Paw Metrics cyan.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='breed1Container'>
                <div className='selectorContainer'>
                    <DropdownButton id="dropdown-item-button" title="Select Breed">
                        <Dropdown.ItemText>Select a Breed Below</Dropdown.ItemText>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                    </DropdownButton>

                    <Button variant="secondary">Select Random</Button>
                </div>

                <div className='breed1CardsContainer'>
                    <div className='mainInfoCardContainer'>
                        <Card style={{ width: '35rem', backgroundColor: '#5E4666', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px' }}>
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
                        <Card style={{ width: '35rem', backgroundColor: '#5E4666', color: '#D9EEF3', border: 'none', alignItems: 'center', borderRadius: '16px' }}>
                            <Card.Title>Maintenance</Card.Title>
                            
                            <div className='pieChart'>
                                <Pie data={{
                                    labels: ['Shedding', 'Grooming', 'Drooling', 'Coat Length'],
                                    datasets: [{
                                        label: 'Maintenance Level',
                                        data: [12, 19, 3, 5],
                                        backgroundColor: [
                                            'rgba(21, 41, 45, 1)',
                                            'rgba(46, 84, 92, 1)',
                                            'rgba(114, 157, 166, 1)',
                                            'rgba(217, 238, 243, 1)'
                                        ],
                                        borderColor: [
                                            'rgba(21, 41, 45, 1)',
                                            'rgba(46, 84, 92, 1)',
                                            'rgba(114, 157, 166, 1)',
                                            'rgba(217, 238, 243, 1)'
                                        ],
                                        borderWidth: 1,
                                    }],
                                }} 
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: false,
                                            text: 'Maintenance Level',
                                        },
                                    },
                                }} />
                            </div>
                        </Card> 
                    </div>   
                </div>

            </div>
        </div>            
    );
    }

export default Compare;