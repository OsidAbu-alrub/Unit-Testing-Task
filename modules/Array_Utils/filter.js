const filter =function filter(array,predicate)
{
    if(!Array.isArray(array)) throw new Error("First argument must be an array");
    if(!(typeof predicate === 'function')) throw new Error("Second argument must be a function");

    const filterArray = [];
    for(let value of array){
        if(predicate(value))
            filterArray.push(value);
    }

    return filterArray;
}

module.exports = {
    filter
};