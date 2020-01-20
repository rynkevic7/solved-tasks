/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

 */

function checkThreeAndTwo(array) {

    let countA = 0;
    let countB = 0;
    let countC = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] === "a"){
            countA++;
        } else if (array[i] === "b"){
            countB++;
        } else if(array[i] === "c")
            countC++;
    }
    if (countA === 3 && (countB === 2 || countC === 2)) return true;
    if (countB === 3 && (countA === 2 || countC === 2)) return true;
    if (countC === 3 && (countB === 2 || countA === 2)) return true;

    return false;
}

//or

function checkThreeAndTwo(array) {
    let t = {a:0, b:0, c:0}
    let a = array.map(x => t[x]++)
    let y = Object.values(t)
    return y.includes(3) && y.includes(2)
}