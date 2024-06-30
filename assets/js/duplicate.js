const cl = console.log;

let num = [1,3,5,1,6,3,4,5,7,8,6,1,5,2]
cl(num)
let dupArray = []

for(let i = 0; i < num.length; i++){
    let dup = true;
    for(let j = 0; j < dupArray.length; j++){
        if(num[i] === dupArray[j]){
            dup = false;
            break
        }
    }
    if(dup){
        dupArray.push(num[i])
    }
}
cl(dupArray)

let result = [] 
num.forEach((arr) =>{
    if(!result.includes(arr)){
        result.push(arr)
    }
})
cl(result)

function duplicateNo(arr){
    return [...new Set(arr)]
}
cl(duplicateNo(num))

let results = num.filter((nums, i)=>{
    return num.indexOf(nums) === i
})
cl(results)


function removeDuplicates(arr) { 
    return Array.from(new Set(arr)); 
} 
cl(removeDuplicates(num))

function removeDuplicates(arr) { 
    return arr.filter((item, index) => arr.indexOf(item) === index); 
} 
cl(removeDuplicates(num))