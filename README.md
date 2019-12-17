# solved-tasks
#### Beginner Series #3 Sum of Numbers
     
    Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
    
    Note: a and b are not ordered!


```javascript
function getSum(a,b){
 let c = 0;
  
   if(a === b) {
     return a;
   } else if (a < b){
      for(let i = a; i <= b; i++){
       c += i
   }
  } else{
     for(let i = b; i <= a; i++){
     c += i
   }
  }
   return c;
}
}
```
