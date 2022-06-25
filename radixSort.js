//Helper func to get digit of
function getDigit(num, n, base) {
    let nthDigit;
    // for any position we need to divide with the base power of that position
    let withDigit = Math.abs(num) % Math.pow(base, n)
    nthDigit = Math.floor(withDigit / Math.pow(base, n-1))

    return nthDigit
}

// Count the digit
function digitCount(num) {
    if (num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

// func for most digits
function mostDigits(arr){
    let maxDigits = 0;
    for(let i=0; i< arr.length ; i++) {
        if(maxDigits< digitCount(arr[i])) {
            maxDigits = digitCount(arr[i]);
        }
    }
    return maxDigits;
}

// Radix Sort
function radixSort(arr) {
    let maxDigits= mostDigits(arr);
    
    for( let i = 1 ; i <= maxDigits ; i++) {
        let bucketArr = Array.from({length: 10}, ()=> []);
        for(let k =0; k< arr.length ; k++) {
            let digit = getDigit(arr[k], i, 10);
            bucketArr[digit].push(arr[k])
        }
        arr = [].concat(...bucketArr);
    }
    return arr;
}

console.log(radixSort([12,23,23,1,5,677,43,2,3,7987,23,5435]))