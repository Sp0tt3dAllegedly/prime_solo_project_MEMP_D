import React, {Component} from 'react';

import { connect } from 'react-redux';



class AdminUpdatePage extends Component {


state = {

            id: this.props.store.detailsReducer.id,
            photo_url: this.props.store.detailsReducer.photo_url,
            name: this.props.store.detailsReducer.name,
            price: this.props.store.detailsReducer.price,
            description: this.props.store.detailsReducer.description


        }


        handleChangeFor = (event, propertyToChange) => {

                this.setState({

                    [propertyToChange]: event.target.value

                })

            console.log(`Typing in ${event.target.value} and adding new ${propertyToChange}`);
            
        }
        
        
        handleEditSubmit = () => {

            console.log(`  'Clicked submit edited details to db'  `);

            window.confirm("Are you sure you wish to submit these edited details for this item?");

            this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state });

            this.props.history.push('/gallery/');
            

        }


        backButton = () => {

            window.confirm("Leave without editing item?");

            alert('Headed back to the gallery!');

            this.props.history.push('/gallery');

        }



    render(){
        
        console.log(this.state.photo_url);
        

        return (
            <>
                <div className="updateDiv">
                    

                    <form onSubmit={(event)=>this.updateItem(event)}>

                        <label>Update Form</label> <br/> <br/> 

                            <textarea type="text" name="photo_url" placeholder={this.state.photo_url} 
                            onChange= {(event) => this.handleChangeFor(event, 'photo_url')}
                            value={this.state.photo_url} />

                            <textarea type="text" name="name" placeholder={this.state.name}  
                            onChange= {(event) => this.handleChangeFor(event, 'name')}
                            value={this.state.name} />

                            <textarea type="text" name="price" placeholder={this.state.price}  
                            onChange= {(event) => this.handleChangeFor(event, 'price')}
                            value={this.state.price} />

                            <textarea type="text" name="description" placeholder={this.state.description}  
                            onChange= {(event) => this.handleChangeFor(event, 'description')}
                            value={this.state.description} />


                    <br/>

                        <button type='submit'>Update this Item!</button>
                        <button onClick={this.backButton}>Back</button>
                    </form>

                
                   
                </div>
            </>

                )
            }
}

const mapStoreToProps = (store) => ({
    store
})

export default connect(mapStoreToProps) (AdminUpdatePage);