import React, {Component} from 'react';



class AdminHomePage extends Component{

    handleAddClick = () => {
        this.history.push('/add');
    }

    render(){
         return (
            <div>
                <div>
                    <p>Admin Home Page</p>
                </div>
            </div>
        )
    }
}

export default AdminHomePage;