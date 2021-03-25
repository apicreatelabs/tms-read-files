const readCsv=require(`../../libs/csv`);

describe('Read csv files', () => {
    test('read  a csv file', () => {
    const mockCsv= jest.fn(readCsv.read('./mocks/test'))
    
    mockCsv.mockReturnValue(true);

    });
    
});