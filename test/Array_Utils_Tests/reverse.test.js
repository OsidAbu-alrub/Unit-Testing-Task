const { reverse } = require('./../../modules/Array_Utils/Array_Utils.js');

test("returned array should be [3,2,1]",()=>{
    let testArray = [1,2,3];
    let output = [3,2,1];
    expect(reverse(testArray)).toEqual(output);
})

test("should return reversed array as [{a:1},false,true,1,9]",()=>{
    testArray = [9,1,true,false,{a:1}];
    output = [{a:1},false,true,1,9];
    expect(reverse(testArray)).toEqual(output);
})

test("should return reversed as array [[1,2,3],1]",()=>{
    const testArray = [1,[1,2,3]];
    const output = [[1,2,3],1];
    expect(reverse(testArray)).toEqual(output);
})

