// pivot function

let y = [5,12,2,19,1,22,12,4,7,12,56,8,12,7,3,2,2,3]

function pivotIndexFind(arr, start=0, end = arr.length) {
    let pivot = arr[start];
    let pivotIndex = start;

    for(let i = start + 1; i <=end; i++) {

        if(pivot > arr[i]) {
            pivotIndex++;
            // swapping the values
            [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
        }
    }
    
    //Final swap
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

    return pivotIndex; 
}

function quickSort(arr, left=0, right=arr.length-1) {

    if(left <right) {

        let pivotIndex = pivotIndexFind(arr, left, right);

        //left
        quickSort(arr, left, pivotIndex-1);

        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;

}

console.log(quickSort(y))