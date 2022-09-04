import React from 'react'

import '../styles/components/header.sass'

const Header = () => {
  return (
    <div className="container">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
    </div>
  )
}

export default Header