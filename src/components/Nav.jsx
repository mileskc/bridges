import React from 'react'
import '../styles/nav.css'
import insta from '../images/IG_Glyph_Fill-0.jpg'
import fb from '../images/f_logo_RGB-Blue_144.png'

const Nav = () => {
  return ( 
    <div className = "nav">
      <a className ="link" href="#homeSection"><img className = "logo" src='https://i.imgur.com/NkM7cZx.jpg'/></a>
      <div className = "links">
        <ul>
          <a className ="link" href="#aboutSection"><li>About</li></a>
          <a className ="link" href="#musicSection"><li href="#">Music</li></a>
          <a className ="link" href="#contactSection"><li href="#">Contact</li></a>
        </ul>
        <a target="_blank" href="https://www.instagram.com/bridges_vocalgroup/"><img className = "insta" src={insta}/></a>
        <a target="_blank" href="https://www.facebook.com/bridgesvocalgroup/"><img className = "fb" src = {fb}/></a>
      </div>
    </div>
  )
}

export default Nav