import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className='padding-block-sides'>
        <h1>Where in the world?</h1>
        <div className="color-theme-container">
            <span>moon</span>
            <h2 className='color-theme-container__color'>Dark Mode</h2>
        </div>
    </header>
  )
}

export default Header
