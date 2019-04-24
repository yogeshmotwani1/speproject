const functions = require('./functions');
const context = require('./context');


test('2+2=4', ()=> {
    expect(functions.add(2,2)).toBe(4);
});

test('User should be Yogesh Motwani',()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Yogesh',
        lastName: 'Motwani'
    });
});