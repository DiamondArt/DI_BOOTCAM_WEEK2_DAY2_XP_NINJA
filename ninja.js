/* 
|Exercise 1 : Age Difference
|---------------------------
|Given the years two people were born, 
|find the date when the younger one is exactly half the age of the older.
|Notes: The dates are given in the format YYYY
*/
const today = new Date();
let oldYear = new Date("1993").getFullYear();
let youngYear = today.getFullYear() ;
let ageHalf = ((youngYear - oldYear)*2);

    if(ageHalf%2 == 0){
        yearHalf =(oldYear + ageHalf);
        console.log(`En ${yearHalf}, votre aurez ${ageHalf} ans`);
    }else{
        console.log("Change date value and try again !")
    }

/* 
|Exercise 2 : Zip Codes
|---------------------------
|While working in a Post Office you must have the clients’ 
|zip code in order to send them their letters.
|Ask the client for their zip code and console.log “success” or “error” based on the following rules.
|Zip codes consists of 5 numbers
|Must only contain numbers
|Must not contain any whitespace (spaces)
|Must not be greater than 5 digits in length
*/

/* without Regular Expressions */
let zipChar = prompt("Enter your zip code").trim();

    if(zipChar.length == 5 && !isNaN(zipChar)) {
        console.log("success");
    } else {
        console.log("Error");
 }


/* using Regular Expressions  */
/************************************************
 * @function onlyNumber
 * @description: verify if value giving is number
 * @param {*} str 
 * @returns boolean
 **************************************************/
    function onlyNumber(str) {
        return Boolean(str?.match(/^[0-9-z\s]*$/));
    }

    let zip = onlyNumber(zipChar)
    if(zip.length == 5){
        console.log("success");
    }else{
        console.log("Error");
    }


/* 
|Exercise 3 : Secret Word
|---------------------------
|Prompt the user for a word and save it to a variable.
|Delete all the vowels of the word and console.log the result.
|Bonus: Replace the vowels with another character and console.log the result
*/
let userWord = prompt("Enter a word").replace(/\s/g, '');
let secretWord="";

for(let i in userWord) {
    secretWord+= userWord[i].replace(/[aeiouy]/i, Math.floor(Math.random()* 101))
}
console.log("Secret word is ",secretWord);

