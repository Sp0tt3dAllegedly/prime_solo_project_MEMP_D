import React, {Component} from 'react';
import { connect } from 'react-redux';

import GalleryItemPage from '../GalleryItemPage/GalleryItemPage';

import '../GalleryPage/GalleryPage.css';



class GalleryPage extends Component{

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_GALLERY' });

    }
    
    render(){
        return (
            <div className = 'alignGallery' >
                <div>
                    
                    <GalleryItemPage history={this.props.history}/>

                </div>
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (GalleryPage);