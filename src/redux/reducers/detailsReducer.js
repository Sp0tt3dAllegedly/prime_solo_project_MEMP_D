// Reducer used to pull item id specific details for items to display on DOM

const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default detailsReducer;