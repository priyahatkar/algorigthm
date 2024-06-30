const cl = console.log;

let nums = [1,34,86,12,99,45,35,47,65]
cl(nums)

function secondSmallest(arr) { 
    const sortedArr = arr.sort((a, b) => a - b); 
    return sortedArr[1]; 
} 
cl(secondSmallest(nums))
