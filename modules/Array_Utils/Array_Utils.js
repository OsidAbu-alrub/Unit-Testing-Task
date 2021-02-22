const map =function map(array,predicate)
{
    if(!Array.isArray(array)) throw new Error("First argument must be an array");
    if(!(typeof predicate === 'function')) throw new Error("Second argument must be a function");

    const returnArray = [];
    for(let i = 0 ; i < array.length ; i++){
        returnArray.push(predicate(array[i],index,array));
    }

    return returnArray;
}

const filter =function filter(array,predicate)
{
    if(!Array.isArray(array)) throw new Error("First argument must be an array");
    if(!(typeof predicate === 'function')) throw new Error("Second argument must be a function");

    const filterArray = [];
    for(let index in array){
        if(predicate(array[index],index,array))
            filterArray.push(array[index]);
    }

    return filterArray;
}




module.exports = {
    map,
    filter
};