/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Validation Test Cases
 */

//Month(s) that is only up to 31 days
const monnth31  = [1, 3, 5, 7, 8, 10, 12];
//Month(s) that is only up to 30 days
const month30 = [4, 6, 9, 11];
//Month(s) that is only up to 28 days
const month28 = [2];

/**
 * Check if a string is a number
 * @param value 
 */
export function isNumber(value){

    return /^[-+]?[0-9]*\.?[0-9]+$/.test(value);
}

/**
 * Check if a string is an email address
 * @param value 
 */
export function isEmail(value){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

/**
 * Check if string is pure letters
 * @param value
 */
export function isLetters(value){
    return /^[A-Za-z]+$/.test(value);
}

/**
 * Check if string is valid phone number
 * @param value
 */

export function isPhone(value){

    if (value.length !==10 ) return false;
    
}