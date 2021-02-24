const { last } = require('./../../modules/Array_Utils/Array_Utils.js');

test("last element in array is 3",()=>{
    let testArray = [1,2,3];
    let output = 3;
    expect(last(testArray)).toBe(output);
})

test("last element in array is {a:1}",()=>{
    testArray = [9,1,true,false,{a:1}];
    output = {a:1};
    expect(last(testArray)).toEqual(output);
})

test("should return empty array []",()=>{
    const testArray = [];
    const output = [];
    expect(last(testArray)).toEqual(output);
})

