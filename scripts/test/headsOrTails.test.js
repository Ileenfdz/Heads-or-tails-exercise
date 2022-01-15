const headsOrTails = require('./module/headsOrTails.js');

test("Devolver 'Cruz ", () => {
    expect(headsOrTails(0)).toBe('Cara');
});

// test("Devolver 'Cruz ", () => {
//     expect(headsOrTails(1)).toBe('Cruz');
// });