const {isValidObj} = require('../../modules/Object_Utils/Object_Utils.js');


test("should throw because '1' is not a valid object",function(){
    testObj = 1;
    expect(function(){isValidObj(testObj)}).toThrow();
});

test("should return true since {} is an object",() => {
    testObj = {};
    output = true;
    expect(isValidObj(testObj)).toBe(output);
});

test("should throw because [] is not a valid object",()=>{
    testObj = [];
    expect(function(){isValidObj(testObj)}).toThrow();
})


test("should throw because null is not a valid object",()=>{
    testObj = null;
    expect(function(){isValidObj(testObj)}).toThrow();
})

test("should throw because undefined is not a valid object",()=>{
    testObj = undefined;
    expect(function(){isValidObj(testObj)}).toThrow();
})




