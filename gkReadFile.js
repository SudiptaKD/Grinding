const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
	return input[currentLine++];
}

let T = Number(readline());
for(let i=1 ; i<=T ; i++ )  {
	let [N, V] = readline().split(' ');
    console.log(i)
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(Number(N), arr)}`)
}

function solve(N, arr) {
	let sum=0;
    for(let i=0 ; i<N ; i++ )  {
	    sum= sum+ Number(arr[i]);
	}
    return sum;
}