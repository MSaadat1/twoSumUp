// function with two arguments
// the first argument is an array of numbers
// the second argument is one number
// function returns the sum up of two numbers from the first
// argument to be equal to the second argument which is one number
// return the index of those two numbers
// we are using new Map() for time complicity
// loop to access each value of array
function twoSumOptimized(array, target){
    const map = new Map();
    for(let i = 0; i < array.length; i++){
        let index = target - array[i];
        if(map.has(index)) return [map.get(index), i];
        map.set(array[i], i)
    }
    return null;

}
console.log(twoSumOptimized([2,3,4,2], 6));