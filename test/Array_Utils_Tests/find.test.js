const { find } = require('./../../modules/Array_Utils/Array_Utils.js');

test("test should return undefined because 'hello' is not found",()=>{
    let testArray = [undefined,null,0,'',false];
    let output = undefined;
    expect(find(testArray, value => value === 'hello')).toBe(output);
})

test("test will return a.3 object",()=>{
    testArray = [{a:1}, {a:2},{a:5} , {a:3}];
    output = {a:3};
    expect(find(testArray,({a}) => a === 3)).toEqual(output);
})

test("this should return 11 because it does exist in the testArray",()=>{
    const testArray = [{a:1}, 11, 'yes', {a:3}];
    const output = 11;
    expect(find(testArray,(value) => typeof value === 'number')).toBe(output);
})

