// Reducer used to get gallery items for render on DOM via GalleryPage

const homeContentReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_HOME_CONTENT':
            return action.payload;
        default:
            return state;
    }
}

export default homeContentReducer;