/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s
age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers,
so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age,
difference between the youngest and oldest age].
 */

function differenceInAges(ages){
    const res = ages.sort((a, b)=> a - b);
    const newArr = [];
    newArr.push(res[0], res[res.length-1], res[res.length-1]-res[0])
    return newArr;
}

//or

const differenceInAges = a => (min = Math.min(...a),max = Math.max(...a),[min,max,max-min])
