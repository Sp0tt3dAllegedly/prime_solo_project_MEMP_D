import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import LandingPage from '../LandingPage/LandingPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import GuestHomePage from '../GuestHomePage/GuestHomePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import AdminHomePage from '../AdminHomePage/AdminHomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';


import './App.css';


class App extends Component {

// Sets initial local state to false value to display landing page upon guest entry
state = {
  visible: false
}

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
  
  // Conditional rendering using if/else statement 
  // used to show either Landing Page component or Login/Register view (currently);
    // this will be altered in the future to direct guests to the main Home Page
   if (!this.state.visible){
      return(
        <div>
        <LandingPage />
        <button onClick={()=>{
          this.setState({visible:true});
        }}
        >
          Enter!
        </button>
        </div>
      )
    }
    else if (this.state.visible){

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}/>
            {/* Route to contact page at localhost:3000/contact */}
            <Route 
              exact 
              path = '/contact' 
              component={ContactPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />

        {/* Routes for guest view pages */}

            <Route exact path='/' component={GuestHomePage} />
            <Route exact path='/gallery' component={GalleryPage} />
            <Route exact path='/details'render={(reduxStore)=>(<GalleryItemDetails {...reduxStore} />)}/>

        {/* Routes for Admin pages */}

            <Route exact path='/admin' component={AdminHomePage} />
            <Route path='/add' component={AdminAddPage} />
            <Route path='/update' component={AdminUpdatePage} />
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          
          </Switch>
          
          <Footer />
        </div>
      </Router>
  )}
          }
}

export default connect()(App);
