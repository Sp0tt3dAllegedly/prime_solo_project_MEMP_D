import React, {Component} from 'react';

import { connect } from 'react-redux';


class GuestHomePage extends Component{

    render(){
         return (
            <div>
                 
                {
                    this.props.store.homeContentReducer.map( item => (
                       
                       <div key={item.id}>

                           <img className='homeContentItem' src={item.photo_url} alt="foo" />

                        </div> 

                        )
                    )
                }

            
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (GuestHomePage);