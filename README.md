# solved-tasks

#### Double Char
     
 Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 
 doubleChar("String") ==> "SSttrriinngg"
 
 doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
 
 doubleChar("1234!_ ") ==> "11223344!!__  "


```javascript

function doubleChar(str) {
  let res = '';
  for(let i = 0; i < str.length; i++){
  res += str[i] + str[i];
  }
  return res;
}





```
