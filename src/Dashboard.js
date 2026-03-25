import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from './PawMetrics Dog Landing.png';
import PawMetricsLogoLong from './Paw Metrics cyan.png';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, LinearScale, PointElement, LineElement, CategoryScale  } from 'chart.js';
import Footer from './components/Footer';
import PieChart, { data as pieData } from './components/PieChartDashboard';
import PolarAreaChart from './components/PolarAreaDashboard';
import LineChart from './components/LineChatDashboard';


ChartJS.register(
    RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement
);

function Dashboard() {
    const [dogData, setDogData] = useState("");

    //Headers for API call
    const key = 'a53858b274mshc183701b570dde1p126299jsn47fed24ded66';
    const host = 'dogs-by-api-ninjas.p.rapidapi.com';

    //Function to fetch dog breed data from API
    const getDogData = () => {

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': key,
            'x-rapidapi-host': host
        }
    };

    //Fetch request for retreiving data from Rapidapi
    fetch("https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=golden%20retriever", options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Data successfully fetched YAYYY", data);
            if (data && data.length > 0) {
                setDogData(data[0]);
            }
        })
};
    
      useEffect(() => {
        getDogData();
      }, []);

  return (
    <div className='dashboardContainer'>
        <div className='dashboardContentsContainer'>
        <div className='greetingContainer'>
                <p>Welcome all Fur Baby Lovers!</p>
                <h3>Daily Dashboard</h3>
        </div>

        {/* Hero Section */}
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
                    <img style={{ borderRadius: '16px', width: '90%', height: 'auto' }} src={dogData.image_link} alt={dogData.name}/>
                    
                </Card>
            </div>

            {/* Socials and Behaviour */}
            <div className="cardContainer">
                <Card className='cardBodyShort' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body>
                    <Card.Text className='cardHeadingText' style={{ textAlign: 'center', width: '100%' }}>
                        Social & Behaviour Insights
                    </Card.Text>
                        <PieChart dogData={dogData} />
                    </Card.Body>
                </Card>
            </div>
        </div>

        <div className='cardRow'>
            {/* Maintenance Stats */}
            <div className="cardContainer">
                <Card className='cardBodyShort' style={{ backgroundColor: '#9A72A6', border: 'none', alignItems: 'center' }}>
                    <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Text className='cardHeadingText'>
                        Maintenance Stats
                    </Card.Text>
                        <PolarAreaChart dogData={dogData} />
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
                        <div className='lineChartContainer'>
                            <LineChart dogData={dogData} />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>

        </div>
    <Footer />    
    </div>
  );
}

export default Dashboard;