import React, {Component} from 'react';

import {connect} from 'react-redux';

import '../LandingPage/LandingPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class LandingPage extends Component {


  render(){

   return(
    <div className="landingPageHeader">
  
       <header className='landingPageHeader'>
                    <h1 className='landingPageText'>MARY EDWORTHY-MCPHERSON DESIGN GALLERY</h1>
                </header>
        <div>
            <div>
                <p className="landingPTag">Welcome to the Mary Edworthy-McPherson Design Gallery!</p>
            </div>
        </div>
    
    </div>
        );
}
}

export default connect()(LandingPage);
