const cl = console.log;

let number = [[125,154,145],[425,6315,987],[745,9864,451]]
cl(number)

function largeNumber(arr){
    let num = Math.max(...arr.flat(Infinity))
    return num
}
cl(largeNumber(number))

function findLargeNumber(arr){
    let nums = arr.map(str =>{
        return str.reduce((cv, acc)=>{
            if(cv > acc){
                return cv
            }else{
                return acc
            }
        })
    })
    return nums
}
cl(findLargeNumber(number))

let nums = [1,34,86,12,99,45,35,47,65]
cl(nums)
function findLargesNumber(str){
    return Math.max(...str)
}
cl(findLargesNumber(nums))

let flag = 0;

nums.forEach((ele)=>{
    if(ele > flag){
        flag = ele
    }
})
cl(flag)

nums.forEach((str)=>{
    if(str < flag){
        flag = str
    }
})
cl(flag)

function findMinMax(arr) { 
    let min = Math.min(...arr); 
    let max = Math.max(...arr); 
    return [min, max]; 
}
cl(findMinMax(nums))

function findMaxNumber(arr) { 
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) { 
        max = arr[i]; 
        } 
    } 
    return max; 
}
cl(findMaxNumber(nums))