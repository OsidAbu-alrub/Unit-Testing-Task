const { map } = require('./../../modules/Array_Utils/Array_Utils.js');

test("each element in returned array is incremented by one",()=>{
    const testArray = [1,2,3,4,5,6,7,8,9];
    expect(map(testArray,value=>value+1)).toEqual([2,3,4,5,6,7,8,9,10]);
})

test("returned array has all strings in it uppercased",()=>{
    const testArray = ["osid",'is',"super","smart"];
    expect(map(testArray,value=>value.toUpperCase())).toEqual(["OSID",'IS',"SUPER","SMART"]);
})