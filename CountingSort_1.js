/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let freqArr = new Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
        freqArr[arr[i]]++; 
    }
    return freqArr;
}


let arr = [1,1,3,2,10];
console.log(countingSort(arr));
