import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LineChart from './components/LineChart';


function Timeline() {
    return (
        <div className="Timeline">
            <header className="Compare-header">
                <div className='greetingContainer'>
                    <p>Compare Patterns. Spot Differences. Understand Breeds Better</p>
                    <h3>Comparative Timeline</h3>
                </div>
            </header> 

            <div className='selectorContainer'>
                    <DropdownButton id="dropdown-item-button" title="Select Breed">
                        <Dropdown.ItemText>Select a Breed Below</Dropdown.ItemText>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                        <Dropdown.Item as="button">Breed Name</Dropdown.Item>
                    </DropdownButton>
                </div>

            <Card id='timelineCard'>
                {/* <Card.Body><LineChart /></Card.Body> */}
            </Card>   
        </div>            
    );
    }

export default Timeline;