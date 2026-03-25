import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DogDropdown({ onSelectBreed, label }) {
    // My curated list of breeds
    const breeds = [
        "Beagle", 
        "Border Collie",
        "Chihuahua",
        "Dalmation",
        "Dachshund",
        "French Bulldog",
        "German Shepherd", 
        "Golden Retriever",
        "Labrador Retriever",
        "Maltese",
        "Pekingese", 
        "Pug",
        "Rottweiler",
        "Shih Tzu",
        "Siberian Husky" 
    ];

    // Keeps track of the currently selected dog to update the button text
    const [currentDog, setCurrentDog] = useState(null);

    // Triggered whenever a user clicks a breed in the dropdown menu
    const fetchDogData = (breedName) => {
        if (!breedName) return;

        //Headers to authenticate with API Ninjas via Rapidapi
        const apiKey = 'a53858b274mshc183701b570dde1p126299jsn47fed24ded66'; 
        const host = 'dogs-by-api-ninjas.p.rapidapi.com';

        //encodeURIComponent ensures that the breed names with spaces (like German Shepherd or French Bulldog) work in the URL
        const url = `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${encodeURIComponent(breedName)}`;

        fetch(url, {
            method: 'GET',
            headers: { 
                'x-rapidapi-key': apiKey, 
                'x-rapidapi-host': host
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const dogData = data[0];
                console.log("Data successfully fetched YIPPEEEE", dogData);
                
                // Updates local state so the dropdown's label changes to the dog's name when selected
                setCurrentDog(dogData); 
                
                if (onSelectBreed) onSelectBreed(dogData); 
            }
        })
    };

    return (
        <div className="dropdown-container" style={{ marginBottom: '20px' }}>
            <DropdownButton 
                id="dropdown-item-button" 
                title={currentDog ? currentDog.name : label} 
                variant="info">
                
                {/* Puts selected breed name into the dropdown menu */}
                {breeds.map((breed) => (
                    <Dropdown.Item key={breed} as="button" onClick={() => fetchDogData(breed)}> {breed} </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default DogDropdown;