import { createContext, useState } from "react";

export const themes = ["light", "dark", "blue", "ouch"];

type SwitchThemeContext = {
    theme: string;
    chooseTheme: ()=> void;
    }

export const switchThemeContext = createContext<SwitchThemeContext>(null!);

type SwitchThemeProviderProps = {
    children: React.ReactNode;
};



export const SwitchThemeProvider = ({ children }: SwitchThemeProviderProps) => {
    const [theme, setTheme] = useState("light");

    const [counter, setCounter] = useState(1)

    function chooseTheme(){
        const newTheme = themes[counter]
        setTheme(newTheme)
        setCounter((oldCounter)=>oldCounter + 1)
        if(counter === themes.length -1){
            setCounter(0)
        }
    }

    return (
        <switchThemeContext.Provider value={{ theme, chooseTheme }}>
            {children}
        </switchThemeContext.Provider>
    );
};
