const cl = console.log;

const arr = [12, 35, 7, 23, 19, 50, 28];

let a = Math.max(...arr)
let aa = arr.filter(x => x !== a)
cl(aa)

let maxIndex = arr.indexOf(Math.max(...arr))
arr.splice(maxIndex,1)
cl(arr)

const arrs = [12, 35, 7, 23, 19,99, 50, 28];

const newArr = arrs.reduce((cv,acc)=>{
    if(acc !== Math.max(...arrs)){
        cv.push(acc)
    }
    return cv
},[])
cl(newArr)