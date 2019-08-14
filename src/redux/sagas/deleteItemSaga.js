import Axios from 'axios';

import {put} from 'redux-saga/effects';

function* deleteItemSaga(action) {
    try{
        console.log('payload is:', action.payload);
        
        yield Axios.delete(`/api/gallery-list/${action.payload.id}`);
        // yield put ({type: 'GET_GALLERY'})
    } 
    catch (error) {
        console.log('error...', error);   
    }
}

export default deleteItemSaga;