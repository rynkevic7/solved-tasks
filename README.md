# solved-tasks
#### Grasshopper - Summation
     
    Summation
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


```javascript
var summation = function (num) {
 let res = 0;
 
 if(num === 1) return num;
 console.log(num)
 
 for(let i = 0; i < num; i++){
 if(res += i !== num)
 res += i
 }
 return res;
}

```
