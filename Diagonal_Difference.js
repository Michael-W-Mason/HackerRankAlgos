/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let rSum = 0;
    let lSum = 0;
    let i = 0;
    let j = arr.length - 1;
    while(j >= 0){
        lSum += arr[i][i];
        rSum += arr[i][j];
        i++;
        j--;
    }
    return Math.abs(lSum - rSum);
}

console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]));