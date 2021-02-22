const map =function map(array,predicate)
{
    if(!Array.isArray(array)) throw new Error("First argument must be an array");
    if(!(typeof predicate === 'function')) throw new Error("Second argument must be a function");

    const returnArray = [];
    for(let i = 0 ; i < array.length ; i++){
        returnArray.push(predicate(array[i]));
    }

    return returnArray;
}

module.exports = {
    map
};