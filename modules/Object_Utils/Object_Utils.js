const keys = function keys(obj){
    const returnArray = [];
    for(let key in obj){
        returnArray.push(key);
    }
    return returnArray;
}




module.exports = {
    keys,
}