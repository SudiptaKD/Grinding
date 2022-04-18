// Merge Function 

let x =[1,3,5,7,8,9]
let y = [2,4,5,12,19,22,24]
let z =[1,4,1,34,12,34,45,86,23,45,55,34,65,45,3,34,4,57,98,3,5,46,8,4,34,5]

function merge(a,b) {
	let arr = [];
  for(let i =0, j=0 ; i<a.length || j<b.length ; ) {
  	if(a[i]<= b[j] || j==b.length) {
      arr.push(a[i])
      i++;
    }
    else if(a[i] >= b[j] || i==a.length) {
      arr.push(b[j])
      j++;
    }
  }
  return arr
}
//console.log(merge(x,y))

function mergeSort(arr) {
  if(arr.length ==1 || arr.length ==1) {
    return arr
  }
  let halfLen = Math.floor((0+ arr.length)/2);
  let firstHalf = arr.slice(0,halfLen);
  let secondHalf = arr.slice(halfLen);
  let sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  //console.log(firstHalf, secondHalf, sortedArr)
  return sortedArr;
}

console.log(mergeSort(z))