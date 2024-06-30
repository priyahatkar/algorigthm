const cl = console.log;

let fib = [0,1]

for(let i = 2; i <= 10; i++){
    fib[i] = fib[i - 2] + fib[i - 1]
}
cl(fib)

let output = [0, 1]

for(let i = 2; i <= 10; i++){
    output.push(output[i - 2] + output[i - 1])
}
cl(output) 

function fibSeries(limit){
    let result = [0,1]

    for(let i = 2; i < limit; i++){
        result[result.length] = result[result.length - 1] + result[result.length - 2]
    }
    return result
}
cl(fibSeries(10))

