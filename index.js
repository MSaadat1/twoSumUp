//remove duplicated elements from a list of arrays
//using new Set to remove duplicate
function removeDupes(array){
    const set = new Set(array);
    return Array.from(set);
}
console.log(removeDupes([1,1,2,2,2,4,4,3,3,5,5,6]));