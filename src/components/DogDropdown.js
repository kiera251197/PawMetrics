import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DogDropdown({ onSelectBreed, label }) {
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

    const [currentDog, setCurrentDog] = useState(null);

    const fetchDogData = (breedName) => {
        if (!breedName) return;

        const apiKey = 'a53858b274mshc183701b570dde1p126299jsn47fed24ded66'; 
        const host = 'dogs-by-api-ninjas.p.rapidapi.com';
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
                
                setCurrentDog(dogData); 
                
                if (onSelectBreed) onSelectBreed(dogData); 
            }
        })
        .catch(err => console.error("Fetch error:", err));
    };

    return (
        <div className="dropdown-container" style={{ marginBottom: '20px' }}>
            <DropdownButton 
                id="dropdown-item-button" 
                title={currentDog ? currentDog.name : label} 
                variant="info">
                
                {breeds.map((breed) => (
                    <Dropdown.Item 
                        key={breed} 
                        as="button" 
                        onClick={() => fetchDogData(breed)}
                    >
                        {breed}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default DogDropdown;