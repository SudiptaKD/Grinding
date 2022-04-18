let x = [2,3,4,5,7,1]
function s(l) {
    for(let i = 1; i<l.length ; i ++ ) {
        let val = l[i];
        let j = i-1;
        while (j >= 0  && val < l[j]) {
            console.log(l)
            l[j+1]= l[j];
            j--
        }
        l[j+1] = val
    }
    return l
}
console.log(s(x))