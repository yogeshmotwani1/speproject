const functions = require('./functions');
const context = require('./context');


test('Test case 1 passed', ()=> {
    expect(functions.add(2,2)).toBe(4);
});

test('Test case 2 passed',()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Yogesh',
        lastName: 'Motwani'
    });
});