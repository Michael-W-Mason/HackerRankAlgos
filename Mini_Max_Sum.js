/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let runningSum = 0;
    arr.map(e => {
        if(e < min){
            min = e;
        }
        if(e > max){
            max = e;
        }
        runningSum += e;
    });
    runningSum = (runningSum - max) - min;
    console.log(runningSum + min, runningSum + max);
}

miniMaxSum([1,3,5,7,9])