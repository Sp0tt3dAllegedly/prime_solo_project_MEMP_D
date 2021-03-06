// Reducer used to get gallery items for render on DOM via GalleryPage

const galleryReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GALLERY':
            return action.payload;
        default:
            return state;
    }
}

export default galleryReducer;