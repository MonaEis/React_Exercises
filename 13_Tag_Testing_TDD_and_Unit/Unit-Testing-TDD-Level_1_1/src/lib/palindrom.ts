export function checkPalidrome(palindromCheck:string){
    const isItAPalindrome = palindromCheck.split("").reverse().join("").toLowerCase().replaceAll(/[\p{P}]/gu, "");
    if(palindromCheck.toLowerCase().replaceAll(/[\p{P}]/gu, "") === isItAPalindrome) return true
    if(palindromCheck !== isItAPalindrome) return false
}