/* UTILITY FUNCTIONS */
function baseIterator(array,predicate,func)
{
    isValidArgs(array, predicate);
    const returnArray = [];
    for(let index = 0 ; index < array.length ; index++) func(returnArray,index);
    return returnArray;
}

function baseIteratorValue(array,predicate,fallbackVal,func)
{
    isValidArgs(array, predicate);
    for(let i = 0 ; i < array.length ; i++){
        let {data,done} = func(array[i],i);
        if(done) return data; 
    }
    return fallbackVal;
}

function isValidArgs(array,predicate)
{
    if(!Array.isArray(array)) throw new Error("First argument must be an array");
    if(!(typeof predicate === 'function')) throw new Error("Second argument must be a function");
}
/* UTILITY FUNCTIONS */

const map =function map(array,predicate)
{
    return baseIterator(array,predicate,
        (returnArray,index) => returnArray.push(predicate(array[index],index,array))
    );
}

const filter =function filter(array,predicate)
{
    return baseIterator(array,predicate,
        (returnArray,index) => 
        {
            if(predicate(array[index],index,array)) returnArray.push(array[index]);
        }
    );
}

const some = function some(array,predicate)
{
    return baseIteratorValue(array, predicate, false,
        (value,index) => predicate(value,index,array) ?  {data: true, done: true} : {data: false, done: false}
    );  
}

const every = function every(array,predicate){
    isValidArgs(array, predicate);
    for(let index in array){
        if(!predicate(array[index],index,array)) return false;
    }
    return true;
}

const find = function find(array,predicate)
{
    isValidArgs(array, predicate);
    for(let i = 0 ; i < array.length ; i++){
        if(predicate(array[i],i,array)) return array[i];
    }
    return undefined;
}

const findIndex = function findIndex(array,predicate)
{
    isValidArgs(array, predicate);
    for(let i = 0 ; i < array.length ; i++){
        if(predicate(array[i],i,array)) return i;
    }
    return -1;
}


module.exports = {
    map,
    filter,
    some,
    every,
    find,
    findIndex,
    isValidArgs
};