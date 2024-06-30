const cl = console.log;

let strArray = [];

for(var i = 0; i <= 100; i++){
    for(var j = 2; j < i; j++){
        if(i % j === 0){
            break
        }
    }
    if(i == j){
        strArray.push(i)
    }
}
cl(strArray)

let strArrays= []
for(let i = 0; i <= 100; i++){
    let primeNot = false;

    for(let p = 2; p <= i; p++){
        if(i % p ===0 && p !== i){
            primeNot = true
        }
    }
    if(primeNot === false){
        strArrays.push(i)
    }
}
cl(strArrays)

function isPrime(arr){
    if(arr <= 1){
        return false
    }
    for(let i = 2; i < arr; i++){
        if(arr % i === 0){
            return false
        }
        return true
    }
} 
isPrime(2)?cl('given no is prime') : cl('given no is not prime')