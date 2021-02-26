const keys = function keys(obj){
    const returnArray = [];
    for(let key in obj){
        returnArray.push(key);
    }
    return returnArray;
}

const values = function values(obj){
    const returnArray = [];
    for(let key in obj){
        returnArray.push(obj[key]);
    }
    return returnArray;
}


module.exports = {
    keys,
    values,
    
}