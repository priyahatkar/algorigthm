const cl = console.log;



let arr= [1,6,4,2]
function findSum(arr) { 
    return arr.reduce((sum, num) => sum + num, 0); 
} 
cl(findSum(arr))

let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
cl(sum)

let a = 0;
arr.forEach((aa)=>{
    a += aa
})
cl(a)


let reduceSum = arr.reduce((cv,acc)=>{
    return cv + acc
},0)

cl(reduceSum)