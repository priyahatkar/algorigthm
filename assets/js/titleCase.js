const cl = console.log;

let str = "i love angular"

function titleCase(str){
    let arr = str.toLowerCase().split(' ');
    let result = arr.map(word =>{
        return word[0].toUpperCase() + word.substring(1)
    })
    return result.join(' ')
}
cl(titleCase(str))

function titleCases(str){
    let arr = str.toLowerCase().split(' ')
    let result = ""
    arr.forEach((str)=>{
        result += str[0].toUpperCase() + str.substring(1) + " "
    })
    return result.trim()
}
cl(titleCases(str))

const titleCase1 = str.toLowerCase().split(' ').reduce((cv,acc)=>{
    return cv + acc.charAt(0).toUpperCase() + acc.slice(1) + ' ';
}, '')

cl(titleCase1)

function toTitleCase(str) { 
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
} 

cl(toTitleCase('i love javascript'))