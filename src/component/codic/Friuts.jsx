import React from "react";
import Friut from "./friut";

function Friuts() {
    const Friuts = [
        { Name: 'Apple', Price: 10, Emoji: "🍏" , Soldout : true},
        { Name: 'Mango', Price: 11, Emoji: "🥭" , Soldout : false},
        { Name: 'Banana', Price: 30, Emoji: "🍌", Soldout : true },
        { Name: 'Orange', Price: 20, Emoji: "🍊" , Soldout : false},
        { Name: 'Pineapples', Price: 10, Emoji: "🍍", Soldout : true },
    ]
    return (
        <h1>
            {
            Friuts.map((friuts) => (
                
                <Friut key={friuts.Name} Name={friuts.Name} Price={friuts.Price} Emoji={friuts.Emoji} Soldout={friuts.Soldout} />
                //<li key={friuts.name}>{friuts.name} ${friuts.price} {friuts.emoji}</li>

            ))
            }
        </h1>
    )
}

export default Friuts;