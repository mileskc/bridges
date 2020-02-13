import React from 'react'
import '../styles/nav.css'
import insta from '../images/IG_Glyph_Fill-0.jpg'
import fb from '../images/f_logo_RGB-Blue_144.png'
import SideBar from './SideBar'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log('clicked')
  }

  render() {
    const barStyle = {
      display:'none'
    }

  return ( 
    <div className = "nav">
      <a className ="link" href="#homeSection"><img className = "logo" src='https://i.imgur.com/edAoLyj.png'/></a>
      <div className = "links">
        <ul className = "navLinks">
          <a className ="link" href="#aboutSection"><li>About</li></a>
          <a className ="link" href="#musicSection"><li href="#">Music</li></a>
          <a className ="link" href="#contactSection"><li href="#">Contact</li></a>
        </ul>
        <a target="_blank" href="https://www.instagram.com/bridges_vocalgroup/"><img className = "insta" src={insta}/></a>
        <a target="_blank" href="https://www.facebook.com/bridgesvocalgroup/"><img className = "fb" src = {fb}/></a>
        <p onClick = {()=>this.toggleBar()} className = "hamButton">☰</p>
        {this.state.isOpen? <SideBar toggleBar={()=>this.toggleBar()}/>: null}
      </div>
    </div>
  )
  }
}

export default Nav