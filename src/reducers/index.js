export default (state = 1, action) => {

    switch (action.type) {
        case 'ADD':
            return state += 1;
            break;
        case 'SUB':
            return state -= 1;
            break;
        default:
            return state;
            break;
    }
};