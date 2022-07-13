/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    let bin = n.toString(2);
    let k = bin.length;
    let temp = '';
    for(let i = 0; i < 32 - k; i++){
        temp += 0;
    }
    bin = temp + bin;
    temp = bin.split('');
    for(let i in temp){
        if(temp[i] == 0){
            temp[i] = 1;
        }
        else{
            temp[i] = 0;
        }
    }
    return parseInt(temp.join(''), 2);
}   

console.log(flippingBits(1));