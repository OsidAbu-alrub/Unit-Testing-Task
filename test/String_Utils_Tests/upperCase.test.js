const {upperCase} = require('../../modules/String_Utils/String_Utils.js');


test("'Abc123%deWa' should become 'ABC123%DEWA'",()=>{
    const test = "Abc123%deWa";
    const output = 'ABC123%DEWA';
    expect(upperCase(test)).toBe(output);
});


test("'abcde' should become 'ABCDE'",()=>{
    const test = "abcde";
    const output = 'ABCDE';
    expect(upperCase(test)).toBe(output);
});



test("'uppercase this please' should become 'UPPERCASE THIS PLEASE'",()=>{
    const test = "uppercase this please";
    const output = 'UPPERCASE THIS PLEASE';
    expect(upperCase(test)).toBe(output);
});


test("'!@#$%^&*' should become '!@#$%^&*'",()=>{
    const test = "!@#$%^&*";
    const output = '!@#$%^&*';
    expect(upperCase(test)).toBe(output);
});