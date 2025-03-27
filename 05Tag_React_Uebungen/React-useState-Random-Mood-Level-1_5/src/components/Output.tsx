import React from 'react'

import { HumanDinosaur } from "react-kawaii";
//   <HumanDinosaur size={240} mood="blissful" color="#A6E191" />

{/* <HumanDinosaur size={240} mood="blissful" color="#A6E191" />
        <HumanDinosaur size={240} mood="sad" color="#A6E191" />
        <HumanDinosaur size={240} mood="shocked" color="#A6E191" />
        <HumanDinosaur size={240} mood="happy" color="#A6E191" />
        <HumanDinosaur size={240} mood="lovestruck" color="#A6E191" />
        <HumanDinosaur size={240} mood="excited" color="#A6E191" />
        <HumanDinosaur size={240} mood="ko" color="#A6E191" /> */}

type Mood =  string


const moods: Mood[] = ["blissful", "sad", "shocked", "happy", "lovestruck", "excited", "ko"];




const Output = () => {
    console.log("Test")
    
    // const [inputValue, setInputValue] = useState("blissfull")
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
    <div>
        <HumanDinosaur size={300} mood="blissfull" color="#A6E191" />

        <button onClick={handleSubmit}>Random Mood</button>
        
        
    </div>
  )
}

export default Output
