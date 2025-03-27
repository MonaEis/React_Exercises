import { useState } from "react";
import { HumanDinosaur } from "react-kawaii";

const moods = ["blissful", "sad", "shocked", "happy", "lovestruck", "excited", "ko"] as const;




const Output = () => {
        
    const [randomNumber, setRandomNumber] = useState(0)
    
    const handleClick = () => {
        const number = Math.floor(Math.random()*7)
        setRandomNumber(number)
    console.log("Randomnumber ist: ", number)}
    

    return (
    <div className='output'>
        <HumanDinosaur size={500} mood={moods[randomNumber]} color="#A6E191" />

        <button onClick={handleClick}>Random Mood</button>
        
        
    </div>
  )
}

export default Output
