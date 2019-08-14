import Axios from 'axios';

import {put} from 'redux-saga/effects';

function* fetchHomeContentSaga(){
    try{
        const response = yield Axios.get('/api/home-page/');
        yield put({type: 'FETCH_HOME_CONTENT', payload: response.data});
        console.log(response.data);
        
    }
    catch (error) {
        console.log('Error getting Gallery', error);
        // alert('No Go for Gallery...');
        
    }
}

export default fetchHomeContentSaga;