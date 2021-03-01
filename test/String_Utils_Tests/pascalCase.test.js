const {pascalCase} = require('../../modules/String_Utils/String_Utils.js');


test("'abc123%dewa' should become 'Abc123%dewa'",()=>{
    const test = "abc123%dewa";
    const output = 'Abc123%dewa';
    expect(pascalCase(test)).toBe(output);
});


test("'abcde' should become 'Abcde'",()=>{
    const test = 'abcde';
    const output = "Abcde";
    expect(pascalCase(test)).toBe(output);
});



test("'pascalcase tHIS plEASE' should become 'Pascalcase THIS PlEASE'",()=>{
    const test = 'pascalcase tHIS plEASE';
    const output = "Pascalcase THIS PlEASE";
    expect(pascalCase(test)).toBe(output);
});


test("'!@#$%^&*' should become '!@#$%^&*'",()=>{
    const test = "!@#$%^&*";
    const output = '!@#$%^&*';
    expect(pascalCase(test)).toBe(output);
});