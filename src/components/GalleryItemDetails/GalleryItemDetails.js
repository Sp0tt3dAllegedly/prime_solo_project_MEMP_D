import React, {Component} from 'react';

import {connect} from 'react-redux';


class GalleryItemDetails extends Component {

    render(){
        return(
            <>
                <header className='DetailsHeader'>
                    <h1 className='DetailsHeaderText'>Item Details</h1>

                        <p>Details for this item!</p>
                </header>

                <main className='galleryItemDetailsMain'>
                        <div>

                            <img src={this.props.store.detailsReducer.photo_url} alt='foo'/>
                            
                            <ul>
                                <br/>
                                <br/>
                                    <li>
                                {this.props.store.detailsReducer.name}
                                    </li>
                                <br/>
                                <br/>
                                    <li>
                                {this.props.store.detailsReducer.price}
                                    </li>
                                <br/>
                                <br/>
                                    <li>
                                {this.props.store.detailsReducer.description}
                                    </li>
                                <br/>
                                <br/>
                            </ul>
                        </div>
                                <br/>
                </main>
            </>
        )
    }

}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps)(GalleryItemDetails);