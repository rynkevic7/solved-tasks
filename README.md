# solved-tasks
#### Power
     
    The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).


```javascript
function numberToPower(n, p){
  let res = n;
  if(p === 0) return 1;
  for(let i = 1; i < p; i++){
   res *= n
   }
  return res;
}

```
