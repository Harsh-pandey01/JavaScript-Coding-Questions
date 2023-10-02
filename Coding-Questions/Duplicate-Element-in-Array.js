// We will be given a array and we have to find the duplicate element in the given array
const arr = [1,2,3,2,8,7,8]
const ans = arr.filter((item,index,array) =>{
    return index != array.indexOf(item);
})
console.log(ans);

// The output will be [2,8]

// Index of always gives the first index at which the element occurse