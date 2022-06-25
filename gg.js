const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
	return input[currentLine++];
}

let T = Number(readline());
for(let i=1 ; i<=T ; i++ )  {
	let N = readline();
    console.log(i)
    let arr = readline().split('');
    console.log(`Case #${i}: ${solve(Number(N), arr)}`)
}

function solve(N, arr) {
    let case1 = (N >= 7 ) ? false : true;
    let case2 = false;
    let case3 = false;
    let case4 = false;
    let case5 = false;
    for (let i =0; i < arr.length; i++) {
        case2 = arr[i]
    }
   
}