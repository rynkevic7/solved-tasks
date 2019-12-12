# solved-tasks
#### Area of a Square
     
     Complete the function that calculates the area of the red square, 
     when the length of the circular arc A is given as the input. 
     Return the result rounded to two decimals.
     Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


```javascript
function squareArea(A){
let s = 4 * (A * A) / (Math.PI * Math.PI)
console.log(s)
return +s.toFixed(2); 
}
```
