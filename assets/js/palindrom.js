const cl = console.log;

function palindrome(str){
    let revStr = str.split("").reverse().join("")
    if(revStr === str){
        return`The Given string is palindrome`
    }else{
        return `The given string is not palindrome`
    }
}
cl(palindrome('madam'))
cl(palindrome('javascript'))

// const str = "madam";
const str = "javascript";
const isPalindrome = str.split("").reduce((acc, curr, i, arr) => {
    return acc && curr === arr[arr.length - i - 1];
}, true);
console.log(isPalindrome);

function isPalindromes(str){
    return str === str.split('').reverse().join('')
}
cl(isPalindromes('madam'))
cl(isPalindromes('java'))

function issPalindrome(str) { 
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join(''); 
} 
cl(issPalindrome('madam'))
