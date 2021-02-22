const { filter } = require('./../../modules/Array_Utils/Array_Utils.js');

test("returned array must have all elements that are greater than 5",()=>{
    const testArray = [1,2,3,4,5,6,7,8,9];
    const output = [6,7,8,9];
    expect(filter(testArray, value => value > 5)).toEqual(output);
})

test("returned array should have one element that is equal to the string 'osid' ",()=>{
    const testArray = ["osid",'is',"super","smart"];
    const output = ["osid"];
    expect(filter(testArray,value => value === 'osid')).toEqual(output);
})