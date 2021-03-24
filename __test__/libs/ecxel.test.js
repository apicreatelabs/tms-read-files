import { read,reqFile } from "../../libs/ecxel";

describe ("Excel reader", ()=>{
    
    test('Read file from', () => {
        expect(read("test.xlsx")).toEqual(true)
    });
})