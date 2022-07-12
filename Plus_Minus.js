/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posRatio = 0;
    let negRatio = 0;
    let zeroRatio = 0;
    arr.map((e) => {
        if(e > 0){
            posRatio++;
        }
        else if(e < 0){
            negRatio++;
        }
        else{
            zeroRatio++;
        }
    });
    posRatio = posRatio / arr.length;
    negRatio = negRatio / arr.length;
    zeroRatio = zeroRatio / arr.length;
    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);
}

plusMinus([1,1,0,-1,-1]);