import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderImg from './PawMetrics Dog Landing.png';
import PawMetricsLogoLong from './Paw Metrics cyan.png';
import Card from 'react-bootstrap/Card';


function Dashboard() {
  return (
    <div className='dashboardContainer'>
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
                <Card className='cardBodyLong'>
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
                <Card className='cardBodyShort'>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Social & Behaviour Insights
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
            </div>
        </div>

        <div className='cardRow'>
            {/* Maintenance Stats */}
            <div className="cardContainer">
                <Card className='cardBodyShort'>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Maintenance Stats
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
            </div>

            {/* Min vs Max Life Expectancy */}
            <div className="cardContainer">
                <Card className='cardBodyLong'>
                    <Card.Body>
                    <Card.Text className='cardHeadingText'>
                        Min vs Max Life Expectancy
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
            </div>
        </div>

    </div>
  );
}

export default Dashboard;