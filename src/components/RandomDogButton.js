import React from 'react';
import Button from 'react-bootstrap/Button';

function RandomDogButton({ onDogSelected }) {
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

    // Function handles the random selection and communication to my API
    const RandomSelect = () => {
        //Choosing a random breed
        const randomIndex = Math.floor(Math.random() * breeds.length);
        const selectedBreed = breeds[randomIndex];

        //Headers to authenticate with API Ninjas via Rapidapi
        const apiKey = 'a53858b274mshc183701b570dde1p126299jsn47fed24ded66';
        const host = 'dogs-by-api-ninjas.p.rapidapi.com';


        //Fetching specific breed data using the selected breed name
        fetch(`https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${selectedBreed}`, {
            method: 'GET',
            headers: { 
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': host
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data received LETS GOOO!!", data);
            //Check if the API returned a valid result before sending it back
            if (data && data.length > 0) {
                onDogSelected(data[0]);
            }
        })
    };

    return (
        <Button variant="secondary" onClick={RandomSelect}>
            Select Random
        </Button>
    );
}

export default RandomDogButton;