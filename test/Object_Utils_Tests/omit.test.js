const {omit} = require('../../modules/Object_Utils/Object_Utils.js');


test("object {a:1,b:2,c:3,d:{w:54}} should return {d:{w:54}}",function(){
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = {d:{w:54}};
    expect(omit(testObj,['a','b','c'])).toEqual(output);
});

test("array [] should return {a:1,b:2,c:3,d:{w:54}}",() => {
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = {a:1,b:2,c:3,d:{w:54}};
    expect(omit(testObj,[])).toEqual(output);
});

test("object {1:'a',2:'b',3:'c'} should return { 'b': '2' }",()=>{
    testObj = { 'a': 1, 'b': '2', 'c': 3 };
    output = { 'b': '2' };
    expect(omit(testObj,['a', 'c'])).toEqual(output);
})




