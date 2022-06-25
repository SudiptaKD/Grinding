const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
	return input[currentLine++];
}

let T = Number(readline());
for(let i=1 ; i<=T ; i++ )  {
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(arr)}`);
}

function solve(arr) {
    let N = Number(arr[0]);
    let h1 = Number(arr[1]);
    let h2 = Number(arr[2]);
    let hcf;
    for (let i = 1; i <= h1 && i <= h2; i++) {

    // check if is factor of both integers
        if( h1 % i === 0 && h2 % i === 0) {
        hcf = i;
        }
    }
    let r1 =h1;
    let r2= h2;
    if(hcf) {
         r1 = h1/hcf;
     r2 = h2/hcf;
    }

    let sum = N*(1+N)/2;
    if(sum % (r1+r2) === 0 ) {
        let alan = (sum*r1)/ (r1+r2);
        let valCount;
        let val='';
        for (let i =1; i<=N ; i++) {
            if(i ===alan) {
                valCount = 1;
                val = i;
                break;
            }

            let newSUm;
            let multiple = false;
            for(let j = i+1; j<=N && i!== N; j++ ) {
                newSUm = (j-i+1)*(i+j)/2;
                if(newSUm === alan) {
                    multiple = true;
                    valCount = j-i+1;
                    for(let k = i; k<=j; k++) {
                        val = val + `${k} `;
                    }
                    break;
                }
            }
            if(multiple) break;
        }

        return `POSSIBLE
        ${valCount}
        ${val}
        `;
    } 
    else return 'IMPOSSIBLE';
}