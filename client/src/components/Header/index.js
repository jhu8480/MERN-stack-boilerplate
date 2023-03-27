import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Header() {

  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  return (
    <div className='header'>
      {Auth.loggedIn ? (
        <div>
          {/* <Link>
            <button onClick={() => {logout()}}>Logout</button>
      </Link> */}
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      )}
    </div>
  )
}

export default Header;