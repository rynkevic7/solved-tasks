# solved-tasks

#### Well of Ideas - Easy Version
     
 For every good kata idea there seem to be quite a few bad ones!
 
 In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
 

  
   
   
```javascript

const well = x => (x.filter(el => el === 'good').length > 2) ? 'I smell a series!' : (x.filter(el => el === 'good').length <= 0) ? 'Fail!' : 'Publish!'







```
