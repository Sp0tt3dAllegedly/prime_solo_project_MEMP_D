import React, {Component} from 'react';
import {connect} from 'react-redux';


class GalleryItemPage extends Component{

    handleImageClick =(item)=> {
        this.props.dispatch({type: 'FETCH_DETAILS', payload: item.id});
      console.log('clicked image', item.id);
    this.props.history.push('/');
    }

    render(){
        return (
            <div>
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
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (GalleryItemPage);