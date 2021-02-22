const { some } = require('./../../modules/Array_Utils/Array_Utils.js');

test("should return false because array doesn't have any truthy values",()=>{
    const testArray = [undefined,null,0,'',false];
    const output = false;
    expect(some(testArray, value => value > 5)).toEqual(output);
})

test("should return true because array has truthy value",()=>{
    const testArray = [null, 0, 'yes', false];
    const output = true;
    expect(some(testArray,Boolean)).toBe(output);
})

