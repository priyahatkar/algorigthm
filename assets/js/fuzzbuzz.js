const cl =console.log;

function fuzzbuzz(n,m){
    for(let i = Math.min(n,m); i <= Math.max(n,m); i++){
        if(i %  15 === 0){
            cl("FizzBuzz")
        }else if(i % 3 === 0){
            cl('Fizz')
        }else if(i % 5 === 0){
            cl("Buzz")
        }else{
            cl(i)
        }
    }
}
fuzzbuzz(150, 200)


for(let i = 0; i <= 50; i++){
    let result = "";
    if(i % 15 === 0){
        result += "fuzzbuzz"
    }else if(i % 3 === 0){
        result += "fuzz"
    }else if(i % 5 === 0){
        result += "Buzz"
    }

    cl(result || i)
}