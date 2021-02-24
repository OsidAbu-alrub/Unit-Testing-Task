const { flatten } = require('./../../modules/Array_Utils/Array_Utils.js');

test("should return flattened array [1,2,3] (length 3)",()=>{
    let testArray = [[1],[2,3]];
    let output = [1,2,3];
    expect(flatten(testArray)).toEqual(output);
})

test("should return flattened array [1, 2, [3, [4]], 5] (length 4)",()=>{
    testArray = [1, [2, [3, [4]], 5]];
    output = [1, 2, [3, [4]], 5];
    expect(flatten(testArray)).toEqual(output);
})

test("should return flattened array [] (length 0)",()=>{
    const testArray = [];
    const output = [];
    expect(flatten(testArray)).toEqual(output);
})

