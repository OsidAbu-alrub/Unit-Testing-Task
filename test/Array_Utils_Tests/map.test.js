const { map } = require('./../../modules/Array_Utils/map');

test("each element in returned array is incremented by one",()=>{
    const testArray = [1,2,3,4,5,6,7,8,9];
    expect(map(testArray,value=>value+1)).toEqual([2,3,4,5,6,7,8,9,10]);
})

test("returned array has all strings in it uppercased",()=>{
    const testArray = ["osid",'is',"super","smart"];
    expect(map(testArray,value=>value.toUpperCase())).toEqual(["OSID",'IS',"SUPER","SMART"]);
})

test("throw error if first argument is not an array",()=>{
    expect(() => map({},()=>1)).toThrow(Error);
    expect(() => map({a:1,b:2},()=>1)).toThrow(Error);
    expect(() => map(1,()=>1)).toThrow(Error);
    expect(() => map("wow",()=>1)).toThrow(Error);
    expect(() => map(null,()=>1)).toThrow(Error);    
    expect(() => map(undefined,()=>1)).toThrow(Error);
})

test("throw error if second argument is not a function",()=>{
    expect(() => map([1,2])).toThrow(Error);    
    expect(() => map([1,2],true)).toThrow(Error);
    expect(() => map([1,2],"nice")).toThrow(Error);
    expect(() => map([1,2],123)).toThrow(Error);
})