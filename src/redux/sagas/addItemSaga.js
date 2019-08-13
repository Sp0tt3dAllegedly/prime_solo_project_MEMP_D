import Axios from 'axios';

import {put} from 'redux-saga/effects';

function* addItemSaga(action) {
    try {
        yield Axios.post('/api/gallery-list', action.payload);
        yield put ({type: 'GET_GALLERY'});
    } catch (error) {
        console.log('Error with posting items:', error);
    }
}


export default addItemSaga;