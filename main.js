// const numbers =  [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// numbers.sort(function(a,b) {return a-b});
// console.log(numbers)

// var a = [1, 2, 3]
// var b = [101, 2, 1, 10]
// var c = a.concat(b.filter((item) => a.indexOf(item) < 0))
// console.log(c)

let arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null];
 
function removeFalsey(arr) {
    // Return the first parameter of the callback function
    return arr.filter((val) => val);
}
 
console.log(removeFalsey(arr));