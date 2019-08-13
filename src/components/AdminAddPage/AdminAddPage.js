import React, {Component} from 'react';

import { connect } from 'react-redux';

import '../AdminAddPage/AdminAddPage.css';

class AdminAddPage extends Component {


    // set local state to newItem object with db item properties

    state = {

        
            photo_url: '',
            name: '',
            price: '',
            description: ''
        

    }
    

    handleChangeFor = (event, propertyToChange) => {
            
        console.log(event.target.value);
        
        
        this.setState({
          
            [propertyToChange]: event.target.value
           
        });
            console.log(this.state);
        
    }


    addItem = (event) => {

        event.preventDefault();

            console.log(this.state);

        this.props.dispatch({type: 'ADD_ITEM', payload: this.state});

    // resets state to blank values after post is sent
        this.setState({

             photo_url: '',
                 name: '',
                 price: '',
                 description: ''
        })
    }

    render(){

        return (
            
                <div className="addFormDiv">

                    <form onSubmit={(event)=>this.addItem(event)}>

                        <label>Item Form</label>

                            <input type="text" name="photo_url" placeholder="Photo URL here" 
                            onChange= {(event) => this.handleChangeFor(event, 'photo_url')}
                            value={this.state.photo_url} />

                            <input type="text" name="name" placeholder="Item Name here" 
                            onChange= {(event) => this.handleChangeFor(event, 'name')}
                            value={this.state.name} />

                            <input type="text" name="price" placeholder="Price in USD (ex. $1.00) here" 
                            onChange= {(event) => this.handleChangeFor(event, 'price')}
                            value={this.state.price} />

                            <input type="text" name="description" placeholder="Item Description here" 
                            onChange= {(event) => this.handleChangeFor(event, 'description')}
                            value={this.state.description} />

                        <button type='submit'>Add this Item!</button>

                    </form>

                </div>
           
        )
    }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps)(AdminAddPage);