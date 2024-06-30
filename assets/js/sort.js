const cl = console.log;

let nums = [1,34,86,12,99,5,45,35,7,47,65]
cl(nums)

let sum = nums.sort((a,b)=>(a>b)? 1 : -1)
cl(sum)

let sums = nums.sort((a,b)=>(a<b)? 1 : -1)
cl(sums)

const sortedArr = nums.sort((a, b) => a - b);

console.log(sortedArr);

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; i < nums.length; i++){
        if(nums[i] > nums[j]){
            nums[i], nums[j] = nums[j], nums[i]
        }
    }
}
cl(nums)

let arr = ['html', 'json', 'css', 'js', 'angular']
function sortStrings(arr) { 
    return arr.slice().sort(); 
} 
cl(sortStrings(arr))
