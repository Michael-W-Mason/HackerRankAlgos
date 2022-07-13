/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let hash = {};
    for(let i of a){
        if(hash[i] !== undefined){
            hash[i]++;
        }
        else{
            hash[i] = 1;
        }
    }
    for(let i in hash){
        if(hash[i] === 1){
            return i;
        }
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));