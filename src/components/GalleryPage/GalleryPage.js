import React, {Component} from 'react';

import GalleryItemPage from '../GalleryItemPage/GalleryItemPage';



class GalleryPage extends Component{

    
    render(){
        return (
            <div>
                <div>
                    <p>Gallery Page</p>
                    <GalleryItemPage />
                </div>
            </div>
        )
    }
}

export default GalleryPage;