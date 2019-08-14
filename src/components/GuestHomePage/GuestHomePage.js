import React, {Component} from 'react';

import { connect } from 'react-redux';

import '../GuestHomePage/GuestHomePage.css';

class GuestHomePage extends Component{

    componentDidMount() {
        this.props.dispatch({type: 'GET_HOME_CONTENT' });
    }


    render(){
        

         return (
             <div className='center'>
            <div className='alignGallery'>
                 
                {
                    this.props.store.homeContentReducer.map( item => (
                       
                       <div key={item.id}>

                           <img className='homeContentItem' src={item.photo_url} alt="foo" />

                        </div> 

                        )
                    )
                }

            </div>
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (GuestHomePage);