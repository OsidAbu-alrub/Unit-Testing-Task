

function isValidArgs(string){
    if((typeof string !== 'string')) throw new Error("Must pass a String as argument");
}





const upperCase = function upperCase(string = ""){
    isValidArgs(string);

    let returnStr = '';
    for(let char of string){
        const ascii = char.charCodeAt(0);
        if(ascii >= 97 && ascii <= 118) char = String.fromCharCode(ascii-32);
        returnStr += char;
    }
    return returnStr;
}



module.exports = {
    upperCase,
}