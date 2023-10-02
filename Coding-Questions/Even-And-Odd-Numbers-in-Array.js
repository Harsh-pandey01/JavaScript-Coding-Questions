// Even-And-Odd-Numbers-in-Array 

// we are given an array and we have to filter out even and odd numbers
const arr = [1,2,3,5,4,8,9,7,10]
const odd = arr.filter((item) => item%2 !=0 )
const even = arr.filter((item) => item%2 ==0)   
     

console.log(odd,even)