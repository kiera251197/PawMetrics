import { Link } from 'react-router-dom';
import '../App.css'; 
import FooterLogo from '../PawMetrics footer logo.png';
import LinkedIn from '../linkedin-in-brands-solid.png';
import Instagram from '../instagram-brands-solid.png';
import Github from '../github-brands-solid.png';


function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
                {/* Socials and Logo */}
                <div className="socialsAndLogo">
                    <img src={FooterLogo} alt="PawMetrics Footer Logo" style={{width: '300px', height: 'auto'}}/>
                    
                    <p style={{color: '#BBD58F' }}>Find the right dog, backed by data</p>
                    
                    <div className="socialIcons">
                        <img src={LinkedIn} alt="LinkedIn Icon"/>
                        <img src={Instagram} alt="Instagram Icon"/>
                        <img src={Github} alt="Github Icon"/>
                    </div>    
                </div>

                {/* Footer Page Links */}
                <div className="footerPageLinks">
                    <Link to="/">Dashboard</Link>
                    <Link to="/compare">Comparison</Link>
                    <Link to="/timeline">Timeline</Link>
                </div>

                {/* Footer Legal Links */}
                <div className='footerLinks'>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;