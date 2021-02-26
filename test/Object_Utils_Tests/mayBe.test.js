const {mayBe} = require('../../modules/Object_Utils/Object_Utils.js');


test("should return 'nablus' because 'location.name' is valid ",function(){
    testObj = {location:{name:'nablus'}};
    output = 'nablus';
    expect(mayBe(testObj,'location.name')).toBe(output);
});

test("object {} should return undefined",() => {
    testObj = {};
    output = undefined;
    expect(mayBe(testObj,"wow.no")).toBe(output);
});

test("object {a:{b:{c:5}}} should return 5",()=>{
    testObj = {a:{b:{c:5}}};
    output = 5;
    expect(mayBe(testObj,'a.b.c')).toBe(output);
})


test("object {fail:{nice:'awesome'}} should return undefined because passed string doesn't exist in object",()=>{
    testObj = {fail:{nice:'awesome'}};
    output = undefined;
    expect(mayBe(testObj,'fail.stop.good')).toBe(output);
})