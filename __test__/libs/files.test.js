const veryfy = require('../../libs/files')

describe('verify TypeFiles', () => {
    test('File "."', () => {
        expect(veryfy.verfifyFile('hola.cosa')).toEqual('COSA');
    });
    test('File "/"', () => {
        expect(veryfy.verfifyFile('hola/cosa')).toEqual('COSA');
    });

    test('Error', () => {
        expect(veryfy.verfifyFile('abcd')).toEqual(false)
    });
});