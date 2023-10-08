// We are given a string and we have to check weather the string is pallindrom or not
let str = "Abba"
if(checkPallindrom(str)){
    console.log(`${str} is a pallindrom`)
}else{
    console.log(`${str} is not a pallindrom`)
}

function checkPallindrom(str){
    let newStr = str.split("").reverse().join('')
    if(str == newStr) return true
    return false
}