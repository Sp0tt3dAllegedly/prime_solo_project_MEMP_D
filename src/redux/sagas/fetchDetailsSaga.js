import Axios from 'axios';

import {put} from 'redux-saga/effects';

function* fetchDetailsSaga(action) {
    try {
        const response = yield Axios.get(`/api/gallery-list/${action.payload}`);
        yield put({
            type: 'GET_DETAILS',
            payload: response.data
        });
    } catch (error) {
        console.log('error getting details', error);
        alert('could not get movie details');

    }
}

export default fetchDetailsSaga;