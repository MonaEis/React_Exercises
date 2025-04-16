export function cleanAndReverseString(word: string){
    const wordWithoutSpecialCharacters = word.replaceAll(/[\p{P}]/gu, "");


    return wordWithoutSpecialCharacters.split("").reverse().join("");
}