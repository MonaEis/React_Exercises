import { useState } from "react";

const DayNight = () => {
    const [isDay, setIsDay] = useState(true);

    const changeDayNight = () => {
        setIsDay((prev) => !prev);
    };

    return (
        <main className={isDay ? "day" : "night"}>
            <div className="output" >
                <h1 className={isDay ? "day" : "night"}>
                    {isDay ? "Day" : "Night"}
                </h1>
                <button onClick={changeDayNight}>
                    Change to {isDay ? "Night" : "Day"}
                </button>
            </div>
        </main>
    );
};

export default DayNight;
