const cl = console.log;

function isOddAndEven(n){
    return (n % 2 === 0)
}
isOddAndEven(102)? cl('given no is even') : cl('given no is odd')

function checkOddOrEven(n){
    if(n % 1 == 0){
        return "given no is odd"
    }
        return 'given no is even'
}
cl(checkOddOrEven(11))

function isOddOrEven(no){
    return (no | 1) === no ? "odd" : "even"
}
cl(isOddOrEven(10))
cl(isOddOrEven(9))

function oddOrEven(n){
    return n % 2 === 0 ? "evan" : "odd"
}
cl(oddOrEven(9))
cl(oddOrEven(10))