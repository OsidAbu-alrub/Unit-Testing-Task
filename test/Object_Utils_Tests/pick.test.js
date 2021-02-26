const {pick} = require('../../modules/Object_Utils/Object_Utils.js');


test("object {a:1,b:2,c:3,d:{w:54}} should return {a:1,b:2}",function(){
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = {a:1,b:2,c:3};
    expect(pick(testObj,['a','b','c'])).toEqual(output);
});

test("object {} should return an empty object {}",() => {
    testObj = {};
    output = {};
    expect(pick(testObj,['a','b'])).toEqual(output);
});

test("object {1:'a',2:'b',3:'c'} should return an object {3:'c'}",()=>{
    testObj = {1:"a",2:"b",3:"c"};
    output = {3:'c'};
    expect(pick(testObj,[3])).toEqual(output);
})