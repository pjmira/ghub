import React from 'react';
import './_top-nav.scss';

function TopNav() {
  return (
    <div>
      <div className='header bg-light'>
        <div className='top-nav-row'>
          <div className='brand my-1'>
            <h1>Game Hub</h1>
          </div>
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0'>
                <option value="">Ages 4-7</option>
                <option value="">Ages 8-10</option>
                <option value="">Ages 12+</option>
              </select>
            </div>
            <input className='form-control' type="text" />
            <button><i className='fa fa-search'/></button>
          </div>
          <div className='login-container p-0'>
            <i className='fa fa-user-circle user-icon'/>
             <h5> <a href='#'>Login</a> </h5> /<h5> <a href='#'> Register </a></h5>
          </div>
          <div className='cart-wishlist'>
            <ul className='p-0'>
              <li className='list-icon'><i className='fa fa-heart'/></li>
              <li className='list-icon'><i className='fa fa-shopping-cart'/></li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default TopNav;
