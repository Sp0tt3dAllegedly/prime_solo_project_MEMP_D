import React, {Component} from 'react';

import {connect} from 'react-redux';

import '../GalleryItemDetails/GalleryItemDetails.css';

class GalleryItemDetails extends Component {

    
        // THIS CODE WILL DISPLAY DROPDOWN ALERT WITH CONFIRMATION FOR ADMIN TO CONFIRM DELETE
            // WILL DELETE THE ITEM AND TAKE ADMIN BACK TO GALLERY PAGE
            
    handleDeleteClick = (event) => {

        console.log(this.props.store.detailsReducer);
        
         window.confirm("Are you sure you wish to delete item?");

        this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.store.detailsReducer.id });
        
        this.props.history.push('/gallery/');
    }

    handleEditClick = () => {
        this.props.history.push('/update');
        alert('EDIT MODE ENGAGED');

    }

    render(){

        console.log(this.props.store.user.auth_status);

        let authStatus = this.props.store.user.auth_status;

        if (authStatus === true ) {

        return(
            <>
                <header className='adminDetailsHeader'>
                    <h1 className='adminDetailsHeaderText'>Admin View: Item Details</h1>

                        <p> Admin View: Details for this item!</p>
                </header>

                <main className='adminGalleryItemDetailsMain'>
                       
                        <div className="itemDiv">
                        
                        

                            <img className="galleryImageItem" src={this.props.store.detailsReducer.photo_url} alt='foo'/>
                            
                            <ul className="itemDetails">
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
                            <button className="detailButtons" onClick={this.handleEditClick}>Edit Item</button>
                            
                    

                            <button className="detailButtons" onClick = {this.handleDeleteClick}>Delete Item</button>
                        </div>
                       
                                <br/>
                </main>
            </>
        )
    }
    
    else {
        
        return(
            <>
                <header className='detailsHeader'>
                    <h1 className='detailsHeaderText'>Item Details</h1>

                        <p>Details for this item!</p>
                </header>

                <main className='galleryItemDetailsMain'>
                        <div className="itemDiv">

                            <img className="galleryImageItem" src={this.props.store.detailsReducer.photo_url} alt='foo'/>
                            
                            <ul className="itemDetails">
                                
                                    <li>
                                {this.props.store.detailsReducer.name}
                                    </li>
                                
                                    <li>
                                {this.props.store.detailsReducer.price}
                                    </li>
                                
                                
                                    <li>
                                {this.props.store.detailsReducer.description}
                                    </li>
                                
                                
                            </ul>
                        </div>
                        
                                <br/>
                </main>
            </>
        )
    }
}
    
}
const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps)(GalleryItemDetails);