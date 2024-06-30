const cl = console.log;

const str = "hello i am here";
cl(str)
function maxChart(arr){
    let givenStr = {}
    for (const max of arr) {
        if(!givenStr[max]){
            givenStr[max] = 1
        }else{
            givenStr[max]++
        }
    }
    return givenStr
}
cl(maxChart(str))

function numberOfWords(str) {
    let count = 0;
    let check = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !check) {
            count++;
            check = true;
        } else if (str[i] === ' ') {
            check = false;
        }
    }
    return count;
}
cl(numberOfWords(str))
