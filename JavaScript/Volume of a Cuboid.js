/*
Bob needs a fast way to calculate the volume of a cuboid with three values: length,
width and the height of the cuboid. Write a function to help Bob with this calculation.
 */

let Kata;

Kata = (function() {
    function Kata() {}

    Kata.getVolumeOfCuboid = function(l, w, h) {
        return l * w * h;
    };

    return Kata;

})();

//or

const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
}