import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import FooterLogo from '../PawMetrics footer logo.png';
import LinkedIn from '../linkedin-in-brands-solid.png';
import Instagram from '../instagram-brands-solid.png';
import Github from '../github-brands-solid.png';
import Dashboard from '../Dashboard';
import Compare from '../Compare';
import Timeline from '../Timeline';

function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
                <div className="socialsAndLogo">
                    <img src={FooterLogo} alt="PawMetrics Footer Logo"/>
                    
                    <p>Find the right dog, backed by data</p>
                    
                    <div className="socialIcons">
                        <img src={LinkedIn} alt="LinkedIn Icon"/>
                        <img src={Instagram} alt="Instagram Icon"/>
                        <img src={Github} alt="Github Icon"/>
                    </div>    
                </div>
            </div>
        </footer>
    );
}

export default Footer;