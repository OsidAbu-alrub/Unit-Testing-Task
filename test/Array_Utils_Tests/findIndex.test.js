const { findIndex } = require('./../../modules/Array_Utils/Array_Utils.js');

test("test should return 0 because 'undefined' is at index 0",()=>{
    let testArray = [undefined,null,0,'',false];
    let output = 0;
    expect(findIndex(testArray, value => typeof value === 'undefined')).toBe(output);
})

test("test will return 3 because 6 lives at index 3",()=>{
    testArray = [5,1,2,6,1,2,3,1,2];
    output = 3;
    expect(findIndex(testArray,(val) => val === 6)).toBe(output);
})

test("this should return -1 because null does not exist in the testArray",()=>{
    const testArray = [{a:1}, 11, 'yes', {a:3},undefined];
    const output = -1;
    expect(findIndex(testArray,(value) => typeof value === 'null')).toBe(output);
})

