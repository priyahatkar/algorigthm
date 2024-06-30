const cl = console.log;

let m = 5;
for(let i = 1; i <= m; i++){
    let space = ' '.repeat(m - i)
    let str = '*'.repeat(i * 2 - 1)
    cl(space+str+space)
}

let n = 5;
 let string = "";
 // External loop
 for (let i = 1; i <= n; i++) {         // 1 2 3 4 5
   // printing spaces
   for (let j = 1; j <= n - i; j++) {    //  5-1 4-1 3-1 2-1 1-1
     string += " ";                         
   }
   // printing star
   for (let k = 0; k < 2 * i - 1; k++) {
     string += "*";
   }
   string += "\n";
 }
cl(string)

for (let i = 1; i <= 1000; i++) {
    if (!/11/.test(i.toString())) {
        console.log(i);
    }
}

for(let i = 1; i <= 1000; i++){
    if(i.toString().includes('11'))
        cl(i)
}