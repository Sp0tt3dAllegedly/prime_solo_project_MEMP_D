import { all, takeLatest } from 'redux-saga/effects';

import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import fetchGallerySaga from './fetchGallerySaga';
import fetchHomeContentSaga from './fetchHomeContentSaga';
import fetchDetailsSaga from './fetchDetailsSaga';
import addItemSaga from './addItemSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  
  yield takeLatest('FETCH_DETAILS', fetchDetailsSaga);
  

  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchGallerySaga(),
    fetchHomeContentSaga(),
    addItemSaga(),
    
  ]);
}
