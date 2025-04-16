export function replaceWithEmoji(text: string): string {
    const wordToEmoji: { [key: string]: string } = {
        love: "❤️",
        heart: "❤️",
        pizza: "🍕",
        cat: "🐱",
        cats: "🐱",
        great: "🥰",
        dog: "🐶",
        dogs: "🐶",
        happy: "😊",
        coffee: "☕",
        sun: "☀️",
        laugh: "😂",
        car: "🚗",
        cars: "🚗",
        music: "🎶",
    };

       return text
        .split(" ")
        .map((word) => {
            const cleanWord = word.replace(/[^a-z]/gi, "");     
                              
            return wordToEmoji[cleanWord.toLowerCase()]
                ? word.replace(cleanWord, wordToEmoji[cleanWord.toLowerCase()])
                : word;
        })
        .join(" ");
    }
    // console.log("Test1: ", ("Dogs").toLowerCase().replace(/[^a-z]/gi, ""))
    // console.log("Test2: ", replaceWithEmoji("Dogs"))
 
 
 
 //*anderer Ansatz mit:
    // new RegExp(word, "i");
    // string.replace(new RegExp(word, "i"), emoji)