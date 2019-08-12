import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../GalleryItemPage/GalleryItemPage.css'

class GalleryItemPage extends Component{

    handleImageClick =(item)=> {
        this.props.dispatch({type: 'FETCH_DETAILS', payload: item.id});
      console.log('clicked image', item.id);
    this.props.history.push('/details');
    }

    render(){
        return (
        <body>
            <div className='alignGallery'>
                {
                    this.props.store.galleryReducer.map( item => (
                       
                       <div key={item.id}>

                           <img className='galleryImageItem' src={item.photo_url} alt="foo" 
                                onClick={()=>this.handleImageClick(item)}/>

                        </div> 

                        )
                    )
                }

            </div>
        </body>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (GalleryItemPage);