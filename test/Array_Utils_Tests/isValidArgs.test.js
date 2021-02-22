const {isValidArgs} = require('./../../modules/Array_Utils/Array_Utils.js');

test("throw error if first argument is not an array",()=>{
    expect(() => isValidArgs({},()=>1)).toThrow(Error);
    expect(() => isValidArgs({a:1,b:2},()=>1)).toThrow(Error);
    expect(() => isValidArgs(1,()=>1)).toThrow(Error);
    expect(() => isValidArgs("wow",()=>1)).toThrow(Error);
    expect(() => isValidArgs(null,()=>1)).toThrow(Error);    
    expect(() => isValidArgs(undefined,()=>1)).toThrow(Error);
})

test("throw error if second argument is not a function",()=>{
    expect(() => isValidArgs([1,2])).toThrow(Error);    
    expect(() => isValidArgs([1,2],true)).toThrow(Error);
    expect(() => isValidArgs([1,2],"nice")).toThrow(Error);
    expect(() => isValidArgs([1,2],123)).toThrow(Error);
})