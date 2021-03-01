

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

const lowerCase = function lowerCase(string = ""){
    isValidArgs(string);

    let returnStr = '';
    for(let char of string){
        const ascii = char.charCodeAt(0);
        if(ascii >= 65 && ascii <= 91) char = String.fromCharCode(ascii+32);
        returnStr += char;
    }
    return returnStr;
}


const pascalCase = function pascalCase(string = ""){
    isValidArgs(string);

    const words = string.split(' ');
    const returnStr = words.map((word) =>{
        return upperCase(word[0]) +  word.substr(1);
    })
    .join(" ");
    return returnStr;
}

const kebabCase = function kebabCase(string = ""){
    isValidArgs(string);

    const words = string.split(' ');
    const returnStr = words.reduce((acc,word)=> acc += '-'+lowerCase(word) ,'');
    return returnStr.substr(1);
}






module.exports = {
    upperCase,
    lowerCase,
    pascalCase,
    kebabCase,
}