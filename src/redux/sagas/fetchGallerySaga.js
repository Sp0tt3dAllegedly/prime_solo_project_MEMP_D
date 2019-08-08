function* fetchGallerySaga(){
    try{
        const response = yield Axios.get('/api/gallery-list');
        yield put({type: 'GET_GALLERY', payload: response.data});
    }
    catch (error) {
        console.log('Error getting Gallery', error);
        // alert('No Go for Gallery...');
        
    }
}

export default fetchGallerySaga;