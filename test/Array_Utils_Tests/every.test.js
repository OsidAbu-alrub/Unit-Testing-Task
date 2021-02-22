const { every } = require('./../../modules/Array_Utils/Array_Utils.js');

test("should return false because array has falsey values",()=>{
    let testArray = [undefined,null,0,'',false];
    let output = false;
    expect(every(testArray, value => value > 5)).toBe(output);

    testArray = [null, 3, 'yes', false];
    output = false;
    expect(every(testArray,Boolean)).toBe(output);
})

test("should return true because array has truthy values only",()=>{
    const testArray = [{}, 11, 'yes', true];
    const output = true;
    expect(every(testArray,Boolean)).toBe(output);
})

