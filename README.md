# solved-tasks
#### Sum of Multiples
     
    Your Job
    Find the sum of all multiples of n below m
    
    Keep in Mind
    n and m are natural numbers (positive integers)
    m is excluded from the multiples


```javascript
function sumMul(n,m){
   let res = 0;

 if(n <= 0 || m <= 0){
  return "INVALID";
  } else {
   for(let i = n; i < m; i++){
   if(i % n === 0)
     res += i;
  } 
 }
  return res;
}
```
