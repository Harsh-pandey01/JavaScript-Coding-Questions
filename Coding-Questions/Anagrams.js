let str1 = "hanni"
let str2 = "annh"
if(checkAnagram(str1,str2)){
    console.log(`${str1} and ${str2} are anagrams`)
}else{
    console.log(`${str1} and ${str2} are not anagrams`)

}


function checkAnagram(str1,str2){
    let new1 = str1.split('').sort().join('')
    let new2 = str2.split('').sort().join('')

    return new1 === new2
}








