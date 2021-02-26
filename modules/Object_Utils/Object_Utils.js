function isValidObj(obj){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj === null)
    {
        throw new Error('Must pass valid object! ({key:value})');
    }
    return true;
}

const keys = function keys(obj){
    isValidObj(obj);
    const returnArray = [];
    for(let key in obj){
        returnArray.push(key);
    }
    return returnArray;
}

const values = function values(obj){
    isValidObj(obj);
    const returnArray = [];
    for(let key in obj){
        returnArray.push(obj[key]);
    }
    return returnArray;
}


const entries = function entries(obj){
    isValidObj(obj);
    const returnArray = [];
    for(let key in obj){
        returnArray.push([key,obj[key]]);
    }
    return returnArray;
}


module.exports = {
    keys,
    values,
    isValidObj,
    entries,
}