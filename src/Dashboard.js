import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from './PawMetrics Dog Landing.png';
import PawMetricsLogoLong from './Paw Metrics cyan.png';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line, Radar, PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function Dashboard() {
  return (
    <div className='dashboardContainer'>
        <div className='greetingContainer'>
                <p>Welcome all Fur Baby Lovers!</p>
                <h3>Daily Dashboard</h3>
        </div>

        <div className='heroContainer'>
            <div className='heroContent'>
                <img src={PawMetricsLogoLong} className="pawmetrics-logo-long" alt="pawmetrics logo"/>
                <p className='info-text'>At PawMetrics, we believe every dog deserves the perfect home. Our platform helps fur baby lovers explore and compare dog breeds through easy-to-understand data, visuals and insights. Whether you're researching or just curious, PawMetrics helps you discover the traits that make every breed special!</p>
                <div className='buttonsHero'>
                    <button className='holographic-card'><Link to="/compare" id='heroButtonLink'>Compare Breeds</Link></button>
                    <button className='holographic-card'><Link to="/timeline" id='heroButtonLink'>Timeline Visualisation</Link></button>
                </div>
            </div>
                <img src={HeaderImg} className="pawmetrics-header-image" alt="pawmetrics dog image" />
        </div>  

        <div className='cardRow'>
            {/* Dog of The Week Image */}
            <div className="cardContainer">
                <Card className='cardBodyLong' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Dog of The Week
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
            </div>

            {/* Socials and Behaviour */}
            <div className="cardContainer">
                <Card className='cardBodyShort' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Social & Behaviour Insights
                    </Card.Text>
                    <Doughnut data={{
                        labels: ['Playfulness', 'Protectiveness', 'Good with Strangers', 'Good with Children', 'Good with Other Dogs'],
                        datasets: [{
                            label: 'Social & Behaviour Insights',
                            data: [2, 4, 1, 3, 5],
                            backgroundColor: [
                                'rgba(21, 41, 45, 1)',
                                'rgba(46, 84, 92, 1)',
                                'rgba(77, 116, 124, 1)',
                                'rgba(114, 157, 166, 1)',
                                'rgba(217, 238, 243, 1)'
                            ],
                            borderColor: [
                                'rgba(21, 41, 45, 1)',
                                'rgba(46, 84, 92, 1)',
                                'rgba(77, 116, 124, 1)',
                                'rgba(114, 157, 166, 1)',
                                'rgba(217, 238, 243, 1)'
                            ],
                            borderWidth: 1,
                        }],
                    }} />   
                    </Card.Body>
                </Card>
            </div>
        </div>

        <div className='cardRow'>
            {/* Maintenance Stats */}
            <div className="cardContainer">
                <Card className='cardBodyShort' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Maintenance Stats
                    </Card.Text>
                    
                    </Card.Body>
                </Card>
            </div>

            {/* Min vs Max Life Expectancy */}
            <div className="cardContainer">
                <Card className='cardBodyLong' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Min vs Max Life Expectancy
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>


    </div>
  );
}

export default Dashboard;