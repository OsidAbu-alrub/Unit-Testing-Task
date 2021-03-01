const {lowerCase} = require('../../modules/String_Utils/String_Utils.js');


test("'Abc123%deWa' should become 'abc123%dewa'",()=>{
    const test = "Abc123%deWa";
    const output = 'abc123%dewa';
    expect(lowerCase(test)).toBe(output);
});


test("'ABCDE' should become 'abcde'",()=>{
    const test = 'ABCDE';
    const output = "abcde";
    expect(lowerCase(test)).toBe(output);
});



test("'LOWERCASE THIS PLEASE' should become 'lowercase this please'",()=>{
    const test = 'LOWERCASE THIS PLEASE';
    const output = "lowercase this please";
    expect(lowerCase(test)).toBe(output);
});


test("'!@#$%^&*' should become '!@#$%^&*'",()=>{
    const test = "!@#$%^&*";
    const output = '!@#$%^&*';
    expect(lowerCase(test)).toBe(output);
});