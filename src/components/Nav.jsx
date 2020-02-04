import React from 'react'
import '../styles/nav.css'

const Nav = () => {
  return ( 
    <div className = "nav">
      <img className = "logo" src='https://i.imgur.com/NkM7cZx.jpg'/>
      <ul>
        <li href="#">About</li>
        <li href="#">Music</li>
        <li href="#">Contact</li>
    	</ul>
    </div>
  )
}

export default Nav