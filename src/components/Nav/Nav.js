import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => ( !props.user.auth_status === false ? 
  <>
{console.log(props.user.auth_status)}

  {/**********************************************ADMIN RENDER**********************************************/}

  <div className="header-MEMPD">Mary Edworthy-McPherson Design Gallery - ADMIN VIEW</div>
  
    
    <div className="nav-right">
      <Link className="nav-link" to="/">
        Admin Home Page
      </Link>

      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Admin Info' : 'Login / Register Admin'}
      </Link>
      <Link className="nav-link" to="/gallery">
        Admin Gallery
      </Link>
      {/* link to Admin Add Item Page */}
      <Link className="nav-link" to="/add">
        Admin Add Item
      </Link>
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About - Admin View
      </Link>
      
      <Link className="nav-link" to="/contact">
            Contact - Admin View
          </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link> */}
          <LogOutButton className="nav-link"/>
        </> 

      )}
      
    </div>
  
  {/* LINE HERE ENDS FIRST SECTION OF TERNARY OPERATION */}
  </> : 

  // *********************************************USER RENDERING*********************************************

  <>
{console.log(props.user.auth_status)}
  
  <div className="header-MEMPD">Mary Edworthy-McPherson Design Gallery</div>
  
    
    <div className="nav-right">
      <Link className="nav-link" to="/">
        Home Page
      </Link>

      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'User Info' : 'Login / Register User'}
      </Link>
      <Link className="nav-link" to="/gallery">
        Gallery
      </Link>
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
      
      <Link className="nav-link" to="/contact">
            Contact
          </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link> */}
          <LogOutButton className="nav-link"/>
        </> 

      )}
      
    </div>
  
  </>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
