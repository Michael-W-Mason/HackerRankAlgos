/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let sum = 0;
        for(let j = 0; j < m; j++){
            sum += s[i + j];
        }
        if(sum === d ){
            count++;
        }
    }
    return count;
}

let s = [2,2,1,3,2];
let d = 4;
let m = 2;
console.log(birthday(s,d,m));