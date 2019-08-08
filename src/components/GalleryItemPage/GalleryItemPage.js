import React, {Component} from 'react';
import {connect} from 'react-redux';


class GalleryItemPage extends Component{

    
    render(){
        return (
            <div>
                {
                    this.props.store.galleryReducer.map( item => (
                       
                       <div key={item.id}>

                           <img className='galleryImageItem' src={item.photo_url} alt="foo" />

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

export default connect(mapStoreToProps) (GalleryItemPage);