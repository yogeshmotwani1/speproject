const functions= {

    add:(num1,num2) => num1 +num2,
    createUser: () =>{
        const user = {firstName : 'Yogesh'};
        user['lastName'] = 'Motwani';
        return user;
    }
};

module.exports = functions;
