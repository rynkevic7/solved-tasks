# solved-tasks
#### Building blocks
     
  Write a class Block that creates a block (Duh..)
  
  ##Requirements
  
  The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
  
  Define these methods:
  
  `getWidth()` return the width of the `Block`
  
  `getLength()` return the length of the `Block`
  
  `getHeight()` return the height of the `Block`
  
  `getVolume()` return the volume of the `Block`
  
  `getSurfaceArea()` return the surface area of the `Block`
  ##Examples
  
      Block b = new Block(new int[]{2,4,6}) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
      b.getWidth() // -> 2
  
      b.getLength() // -> 4
  
      b.getHeight() // -> 6
  
      b.getVolume() // -> 48
  
      b.getSurfaceArea() // -> 88
  Note: no error checking is needed
  
  Any feedback would be much appreciated
   
   
   
```javascript
public class Block {

        int Width;
        int Length;
        int Height;
        int Volume;
        int SurfaceArea;

        public Block(int[] array) {
            this.Width = array[0];
            this.Length = array [1];
            this.Height = array [2];
            this.Volume = Width * Length * Height;
            this.SurfaceArea = 2 * Length * Height + 2 * Length * Width + 2 * Width * Height;
        }

        public int getWidth() {
            return Width;
        }



```
