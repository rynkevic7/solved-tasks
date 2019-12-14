# solved-tasks
#### Basic Mathematical Operations
     
    Your task is to create a function that does four basic mathematical operations.
    
    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.


```javascript
function basicOp(o, v1, v2){
 switch(o){
   case '+' : 
   return v1+v2;
    break;
   case '-' : 
   return v1-v2;
    break;
   case '*' : 
   return v1*v2;
    break;
   default : 
    return v1/v2;
 }
}
```
