// We are given an array and we have to find the maximum element or minimum element from it

// we can use reduce method
const arr = [1,98,87,65,655]
const maxi = arr.reduce((prev,curr) =>{
    return prev > curr ? prev: curr ;
})


const mini = arr.reduce((prev,curr) =>{
    return prev < curr ? prev: curr ;
})

console.log(`${maxi} and ${mini}`);