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
        (value,index) => predicate(value,index,array) ?  {data: true, done: true} : {data: null, done: false}
    );  
}

const every = function every(array,predicate){
    return baseIteratorValue(array, predicate, true, (value,index) =>
        (!predicate(value,index,array)) ? {data:false,done:true} : {data:null ,done:false}
    );
}

const find = function find(array,predicate)
{
    return baseIteratorValue(array, predicate, undefined, (value,index) =>
        (predicate(value,index,array)) ? {data:value,done:true} : {data:null,done:false}
    );
}

const findIndex = function findIndex(array,predicate)
{
    return baseIteratorValue(array, predicate, -1, (value,index) =>
        (predicate(value,index,array)) ? {data:index,done:true} : {data:null,done:false}
    )
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