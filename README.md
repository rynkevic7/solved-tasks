# solved-tasks
#### Beginner Series #4 Cockroach
     
   The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
   
   For example:
   
   cockroachSpeed(1.08) == 30
   Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
   
   Examples
   isPowerOfTwo(1024) // -> true
   isPowerOfTwo(4096) // -> true
   isPowerOfTwo(333)  // -> false
   Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
   
   
   
```javascript
const cockroachSpeed = s => Math.floor((((s * 1000) * 100) /60) /60)
```
