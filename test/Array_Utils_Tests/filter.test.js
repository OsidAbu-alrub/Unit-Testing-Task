const { filter } = require('./../../modules/Array_Utils/filter');

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

test("throw error if first argument is not an array",()=>{
    expect(() => filter({},()=>1)).toThrow(Error);
    expect(() => filter({a:1,b:2},()=>1)).toThrow(Error);
    expect(() => filter(1,()=>1)).toThrow(Error);
    expect(() => filter("wow",()=>1)).toThrow(Error);
    expect(() => filter(null,()=>1)).toThrow(Error);    
    expect(() => filter(undefined,()=>1)).toThrow(Error);
})

test("throw error if second argument is not a function",()=>{
    expect(() => filter([1,2])).toThrow(Error);    
    expect(() => filter([1,2],true)).toThrow(Error);
    expect(() => filter([1,2],"nice")).toThrow(Error);
    expect(() => filter([1,2],123)).toThrow(Error);
})