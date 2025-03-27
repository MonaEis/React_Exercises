import { useState } from "react";
import { HumanDinosaur } from "react-kawaii";


const moods = [
    "blissful",
    "sad",
    "shocked",
    "happy",
    "lovestruck",
    "excited",
    "ko",
] as const;

const colors = [
    "#A6E191",
    "#02a487",
    "#8400f8",
    "#f89100",
    "#00a1f8",
    "#f858d3",
] as const;

const Output = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const handleClick = () => {
        const number = Math.floor(Math.random() * 7);
        setRandomNumber(number);
        console.log("Randomnumber ist: ", number);
    };

   
    
    const [randomColor, setRandomcolor] = useState("#A6E191");

    const handleColorClick = () => {
        const number = Math.floor(Math.random() * colors.length);
        setRandomcolor(colors[number]);
    };
    

    return (
        <div className="output">
            <HumanDinosaur
                size={500}
                mood={moods[randomNumber]}
                color={randomColor}
            />

            <button onClick={handleClick}>Random Mood</button>

            <button onClick={handleColorClick}>Random Color</button>
        </div>
    );
};

export default Output;
