/* UTILITY FUNCTIONS */
function baseIterator(array,predicate,func)
{
    isValidArgs(array, predicate);
    const returnArray = [];
    for(let index = 0 ; index < array.length ; index++) func(returnArray,index);
    return returnArray;
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


module.exports = {
    map,
    filter,
    isValidArgs
};