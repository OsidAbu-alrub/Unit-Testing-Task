const {keys} = require('../../modules/Object_Utils/Object_Utils.js');


test("object {a:1,b:2,c:3,d:{w:54}} should return an array of ['a','b','c','d']",function(){
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = ['a','b','c','d'];
    expect(keys(testObj)).toEqual(output);
});

test("object {} should return an empty array",() => {
    testObj = {};
    output = [];
    expect(keys(testObj)).toEqual(output);
});

test("object {1:'a',2:'b',3:'c'} should return an array of ['1','2','3']",()=>{
    testObj = {1:"a",2:"b",3:"c"};
    output = ['1','2','3'];
    expect(keys(testObj)).toEqual(output);
})




