/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let hash = {};
    s=s.toLowerCase();
    for(let i of s){
        if(i == ' '){
            continue;
        }
        if(hash[i] == undefined){
            hash[i] = true;
        }
    }
    return Object.keys(hash).length == 26 ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));
