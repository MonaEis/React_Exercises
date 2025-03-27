import { useState } from "react";
import Output from "./Output";

const Input = () => {
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputLastnameValue, setInputLastnameValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");

    return (
        <div className="box">
            <form>
                <input
                    type="text"
                    value={inputNameValue}
                    placeholder="Vorname eingeben"
                    onChange={(event)=>(setInputNameValue(event.target.value))}
                />
                <input
                    type="text"
                    value={inputLastnameValue}
                    placeholder="Nachname eingeben"
                    onChange={(event)=>(setInputLastnameValue(event.target.value))}
                />
                <input
                    type="text"
                    value={inputEmailValue}
                    placeholder="Email eingeben"
                    onChange={(event)=>(setInputEmailValue(event.target.value))}
                />
            </form>
            <Output vorname={inputNameValue} nachname={inputLastnameValue} mail={inputEmailValue}/>
            
        </div>
    );
};

export default Input;
