import Axios from 'axios';


function* deleteItemSaga(action) {

console.log(action);

    try{
        console.log('payload is:', action.payload);
        
        yield Axios.delete(`/api/gallery-list/${action.payload}`);
        
    } 
    catch (error) {
        console.log('error...', error);   
    }
}

export default deleteItemSaga;