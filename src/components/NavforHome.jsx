import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import '../css/nav.css';

function NavforHome() {

  const [showNav, setShowNav] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  const logout = async () => {
    firebase.auth().signOut();
    window.location.replace('/')
  }

  return (
    <div className={`nav ${showNav && "nav__black"} `}>
      <div className="nav__content">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" className='logo' />
        <div className='tooltip'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className='avatar__logo' onClick={logout} />
          <span className="tooltiptext" data-text="Log Out" >Log Out</span>
        </div>
      </div>
    </div>
  );
}

export default NavforHome;

