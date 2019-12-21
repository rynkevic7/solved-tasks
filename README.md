# solved-tasks

#### What is type of variable?
     
 Create a function to return true type of variable, i.e.
 
 type([]) => 'array'
 type({}) => 'object'
 type('') => 'string'
 type(NaN) => 'number'
  
   
   
```javascript

function type(value) {
if ({}.toString.call(value) === "[object Null]") return 'null';
if ({}.toString.call(value) === "[object Date]") return 'date';
if ({}.toString.call(value) === "[object Array]") return 'array';
  return typeof(value);
}



```
