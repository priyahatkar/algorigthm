const cl = console.log;

let str = "I Love Javascript";
cl(str)

function vowelStr(arr){
    let vowel = "aeiou";
    let count = 0
    for (const letter of arr) {
        if(vowel.includes(letter.toLowerCase())){
            count++
        }
    }
    return count
}
cl(vowelStr(str))

let oxygen = "i love javascript imp"

function VowelsNum(str){
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}
cl(VowelsNum(oxygen))


function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}
cl(getCount(oxygen))