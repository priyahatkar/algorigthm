const cl = console.log;


let str = "I Love Angular"

function resverStr(){
    return str.split(" ").reverse().join(" ")
}
cl(resverStr())

let result = ""
for(let i = 0; i < str.length; i++){
    result = str[i] + result
}
cl(result)

let results = ""

for(let i = str.length - 1; i >= 0; i--){
    results += str[i]
}
cl(results)

const revStr=(num)=>{
    return num.split(' ').reverse().join(' ').split('').reverse().join('')
}
cl(revStr(str))

let a = [0,3,1,5,4,7,9,8,2,10,777,6,99,25]

let aa = [];

a.forEach((cc) =>{
    aa.unshift(cc)
})
cl(aa)
let dd = []
a.slice().reverse().forEach((bb)=> dd.push(bb))
cl(dd)

let c = a.reduce((a,b)=> [b].concat(a),[])
cl(c)

function reversArray(arr){
    return arr.reduce((a,b)=>{
        a.unshift(b)
        return a
    },[])
}
cl(reversArray(a))
