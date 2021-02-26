const {entries} = require('../../modules/Object_Utils/Object_Utils.js');

test("object {a:1,b:2,c:3,d:{w:54}} should return an array of [['a',1],['b',2],['c',3],['d',{w:54}]]",function(){
    testObj = {a:1,b:2,c:3,d:{w:54}};
    output = [['a',1],['b',2],['c',3],['d',{w:54}]];
    expect(entries(testObj)).toEqual(output);
});

test("object {} should return empty array []",() => {
    testObj = {};
    output = [];
    expect(entries(testObj)).toEqual(output);
});

test("object {1:'a',2:'b',3:'c'} should return an array of [['1', 'a'], ['2', 'b'], ['3', 'c']]",()=>{
    testObj = {1:"a",2:"b",3:"c"};
    output = [["1", "a"], ["2", "b"], ["3", "c"]];
    expect(entries(testObj)).toEqual(output);
})




