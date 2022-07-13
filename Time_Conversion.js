/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let result = s.slice(2,8);
    let h = parseInt(s[0] + s[1]);
    if(s[8] == 'A'){
        if(h == 12){
            h = 0 + (h - 12).toString();
        }
        else{
            h = 0 + h.toString();
        }
        return h + result;
    }
    else if(s[8] == 'P'){
        if(h!=12){
            h = (h + 12).toString();
        }
        return h + result;
    }
    else{
        return s;
    }
}

console.log(timeConversion('12:45:54PM'));