const headsOrTails = require('../scripts/headsOrTails.js')

describe('Just an example to testing jest installation', () => {
    
    test("Devolver Cara ", () => {
        expect(headsOrTails(1)).toBe('Cara');
    });

    test("Devolver Cruz ", () => {
        expect(headsOrTails(0)).toBe('Cruz');
    });
})