// We have to find the second largest element in array
// But here the catch is , we will be given duplicates too
// arr:-[1,2,4,5,8,9,9] :-ans will be 8 not 9


const arr = [1,2,4,5,8,9,9] 
let maxi = arr[0];
let second = -1 
arr.forEach((item)=>{
    if(item > maxi){
        second = maxi 
        maxi = item
    }else if(item < maxi && item > second){
        second = item
    }
})

console.log(second);