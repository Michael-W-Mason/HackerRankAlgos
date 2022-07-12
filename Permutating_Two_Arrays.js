/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    let arr1 = A.sort((a, b) => a-b);
    let arr2 = B.sort((a, b) => b-a);
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] + arr2[i] < k){
            return "NO";
        }
    }
    return "YES";
}

let A = [4,2,3,1];
let B = [2,3,4,5];
let k = 8;
console.log(twoArrays(k, A, B));