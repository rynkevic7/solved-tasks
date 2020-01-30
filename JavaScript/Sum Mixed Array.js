/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

function sumMix(x){
    let res = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] !== "number"){
            res += parseInt(x[i])
        } else res += x[i];
    }
    return res;
};

//or

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}