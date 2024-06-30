const cl = console.log;

let num = [[1, 2,[ 3, [4, 5], 3], 4], [9, 7, 5], [1, [11, 3], 5]]
cl(num)
let flatArray = (arr) => arr.flat(Infinity)

let flatedArr = flatArray(num)
cl(flatedArr)

let flatsArray = (arr) => arr.flat(2)

let flatedArrs = flatsArray(num)
cl(flatedArrs)

let nums = [[1, 2, 3], [4, 5, 3, 4], [9, 7, 5, 1], [11, 3, 5]]

function flattenArray(str){
    return str.reduce((a,b)=>{
        return a.concat(b)
    })
}
cl(flattenArray(nums))

function flattenArrays(arr){
    return [].concat(...arr)
}
cl(flattenArrays(nums))

function flatten(str){
    return [].concat.apply([], str)
}
cl(flatten(nums))

let arr = [[1, [2], 3], [[4, [5, 3], 4], [9, [7, [5]], 1]], [11, 3, 5]]

const flattenArray = (nestedArray) => { 
    return nestedArray.flat(Infinity); 
}; 
cl(flattenArray(arr))
