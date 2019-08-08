import React, {Component} from 'react';
import { connect } from 'react-redux';

import GalleryItemPage from '../GalleryItemPage/GalleryItemPage';




class GalleryPage extends Component{

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_GALLERY' });

    }
    
    render(){
        return (
            <div>
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