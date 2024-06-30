const cl = console.log;

let num = [-7, -5, -4, -3, -2, -1, 4, 7, 9]

const sumCount = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
    return result
}
cl(sumCount(num))

const sumCounts = (arr) =>{
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result
}
cl(sumCounts(num))

let number  = 1090500460050460;
let p =0;
while(number > 0){
    if(number % 10 === 0){
        p++;
        number = number / 10;
    }else{
        number = Math.floor(number / 10);
    }
}

cl(p);