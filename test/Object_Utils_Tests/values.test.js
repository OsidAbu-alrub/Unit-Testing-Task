const {values} = require('../../modules/Object_Utils/Object_Utils.js');


test("object {a:1,b:2,c:3,d:{w:54}} should return an array of [1,2,3,{w:54}]",function(){
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = [1,2,3,{w:54}];
    expect(values(testObj)).toEqual(output);
});

test("object {} should return an empty array",() => {
    testObj = {};
    output = [];
    expect(values(testObj)).toEqual(output);
});

test("object {1:'a',2:'b',3:'c'} should return an array of ['a','b','c']",()=>{
    testObj = {1:"a",2:"b",3:"c"};
    output = ['a','b','c'];
    expect(values(testObj)).toEqual(output);
})




