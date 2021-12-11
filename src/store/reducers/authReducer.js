const initState = {
    users: [
        {id: '0', email: 'test@test.com', pass: 'test'},
        {id: '1', email: 'example@example.com', pass: 'example'},
        {id: '2', email: 'email@email.com', pass: 'email'}
    ]
};

const authReducer = (state = initState, action) => {
    return state
}

export default authReducer;