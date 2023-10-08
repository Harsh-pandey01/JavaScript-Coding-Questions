// Remove_duplicates_from_array
let arr =[1,2,2,3,3,4,5,6]

let ans = arr.filter((item,index,arr)=>{
    return index === arr.indexOf(item)
})
console.log(ans)