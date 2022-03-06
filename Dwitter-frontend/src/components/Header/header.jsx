import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        {/*logo contianer*/}
        <div className='logo-container'>
          
          <div className="logo-img">
            <img src="" alt="" />
          </div>
          <div className='logo-title'>
            <span>MyChat</span>
          </div>
        </div>
       {/*Tweets container*/}
       <ul className='info-container'>
         <li>All Tweets</li>
         <li>My Tweets</li>
         <li>Logout</li>
       </ul>
      </nav>
    </div>
  );
};

export default Header;