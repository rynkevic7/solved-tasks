# solved-tasks

#### Filling an array (part 1)
     
 We want an array, but not just any old array, an array with contents!
 
 Write a function that produces an array with the numbers 0 to N-1 in it.
 
 For example, the following code will result in an array containing the numbers 0 to 4:
  
   
   
```javascript

function arr(N){
if (N < 0 || N === undefined) return [];
let newArr = [];
for(let i = 0; i < N; i++){
newArr.push(i)
}
return newArr
}


```
