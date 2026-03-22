import React from 'react';
import Button from 'react-bootstrap/Button';

function RandomDogButton({ onDogSelected }) {
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

    const RandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * breeds.length);
        const selectedBreed = breeds[randomIndex];

        const apiKey = 'a53858b274mshc183701b570dde1p126299jsn47fed24ded66';
        const host = 'dogs-by-api-ninjas.p.rapidapi.com';


        fetch(`https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${selectedBreed}`, {
            method: 'GET',
            headers: { 
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': host
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data received!!!!!", data);
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