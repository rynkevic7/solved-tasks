/*
n this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
More examples in test cases. Good luck!
 */

 function solve(st) {

    let mostValuable = st[0];
    let value = 0;

    for(let i = 0; i < st.length; i++){
        if(st.lastIndexOf(st[i]) - st.indexOf(st[i]) > value){
            mostValuable = st[i];
            value = st.lastIndexOf(st[i]) - st.indexOf(st[i])
        } else if (st.lastIndexOf(st[i]) - st.indexOf(st[i]) === value){
            if(st[i] < mostValuable){
                mostValuable = st[i];
            }
        }
    }
    return mostValuable;
}