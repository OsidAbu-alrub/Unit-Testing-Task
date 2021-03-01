const {kebabCase} = require('../../modules/String_Utils/String_Utils.js');


test("'Abc 123 deWa' should become 'Abc-123-deWa'",()=>{
    const test = "Abc 123 deWa";
    const output = "abc-123-dewa";
    expect(kebabCase(test)).toBe(output);
});


test("'ABCDE' should become 'abcde'",()=>{
    const test = 'ABCDE';
    const output = "abcde";
    expect(kebabCase(test)).toBe(output);
});



test("'kebabcase THIS PLEASE' should become 'kebabcase-this-please'",()=>{
    const test = 'kebabCase THIS PLEASE';
    const output = "kebabcase-this-please";
    expect(kebabCase(test)).toBe(output);
});