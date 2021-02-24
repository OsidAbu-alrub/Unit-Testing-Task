const { groupBy } = require('./../../modules/Array_Utils/Array_Utils.js');

test("the result of groupBy with predicate function Math.floor should equal { '4': [4.2], '6': [6.1, 6.3] }",()=>{
    let testArray = [6.1, 4.2, 6.3];
    let output = { "4": [4.2], "6": [6.1, 6.3] };
    expect(groupBy(testArray,Math.floor)).toEqual(output);
})

test("the result of groupBy with predicate function Math.floor should equal {4: [4.2], 5: [5], 6: [6.1, 6.3, 5.6, 6], 8: [7.8]}",()=>{
    testArray = [6.1, 4.2, 6.3, 5.6, 7.8, 5, 6];
    output = {"4": [4.2], 5: [5], "6": [6.1, 6.3, 5.6, 6], "8": [7.8]};
    expect(groupBy(testArray,Math.round)).toEqual(output);
})

test("the result of groupBy with predicate function (value) => 5) should equal {5: [6.1, 4.2, 6.3, 5.6, 7.8, 5, 6]}",()=>{
    const testArray = [6.1, 4.2, 6.3, 5.6, 7.8, 5, 6];
    const output = {"5": [6.1, 4.2, 6.3, 5.6, 7.8, 5, 6]};
    expect(groupBy(testArray,(value) => 5)).toEqual(output);
})

