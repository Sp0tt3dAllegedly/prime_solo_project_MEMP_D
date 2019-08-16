import Axios from 'axios';

function* editDetailsSaga(action) {

    try {
        yield Axios.put(`/api/gallery-list/update/${action.payload.id}`, action.payload);
    }
    catch (error) {
        console.log('error editing those details... try again later please!', error);
        alert('Sorry, try again later or contact your system administrator');
        
    }
}

export default editDetailsSaga;