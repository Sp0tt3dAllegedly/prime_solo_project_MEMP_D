import React, {Component} from 'react';

import { connect } from 'react-redux';

import '../AdminAddPage/AdminAddPage.css';

class AdminAddPage extends Component {


    // set local state to newItem object with db item properties

    state = {

        newItem : {
            photo_url: '',
            name: '',
            price: '',
            description: ''
        }

    }
    
    render(){

        return (
            <body>
                <div className="addFormDiv">

                    <form onSubmit={(event)=>this.addItem(event)}>

                        <label>Add an item</label>

                            <input type="text" name="photo_url" placeholder="Photo URL here" 
                            onChange= {(event) => this.handleChangeFor(event, 'photo_url')}
                            value={this.state.newItem.photo_url} />

                            <input type="text" name="name" placeholder="Item Name here" 
                            onChange= {(event) => this.handleChangeFor(event, 'name')}
                            value={this.state.newItem.name} />

                            <input type="text" name="price" placeholder="Price in USD (ex. $1.00) here" 
                            onChange= {(event) => this.handleChangeFor(event, 'price')}
                            value={this.state.newItem.price} />

                            <input type="text" name="description" placeholder="Item Description here" 
                            onChange= {(event) => this.handleChangeFor(event, 'description')}
                            value={this.state.newItem.description} />

                    </form>

                </div>
            </body>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps)(AdminAddPage);