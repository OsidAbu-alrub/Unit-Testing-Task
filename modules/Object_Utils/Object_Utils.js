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

const mayBe = function mayBe(obj,keyString, fallBackVal = undefined){
    isValidObj(obj);
    const keyArray = keyString.split('.');
    let result = obj;
    for(let key of keyArray){
        if(!(key in result)){
            return fallBackVal;
        }
        result = result[key];
    }
    return result;
}

const pick = function pick(obj,path){
    isValidObj(obj);
    let result = {};
    path.forEach((value) => { if(value in obj) result[value] = obj[value]; })
    return result;
}


module.exports = {
    keys,
    values,
    isValidObj,
    entries,
    mayBe,
    pick
}