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
    <>
       <header className='landingPageHeader'>
                    <h1 className='landingPageText'>LANDING PAGE PLACEHOLDER TEXT</h1>
                </header>
        <div>
            <div>
                <p>Landing Page</p>
            </div>
        </div>
    </>
        );
}
}

export default connect()(LandingPage);
