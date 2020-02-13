import React from 'react'
import '../styles/side-bar.css'

const SideBar = (props) => {
    return (
      <div className = "SideBar">
				<p onClick={()=>props.toggleBar()} id = "closeModal">X</p>
        <ul className = "barLinks">
          <a className ="link" href="#aboutSection"><li className = "sideLink">About</li></a>
          <a className ="link" href="#musicSection"><li className = "sideLink" href="#">Music</li></a>
          <a className ="link" href="#contactSection"><li className = "sideLink" href="#">Contact</li></a>
        </ul>
      </div>
    )
}

export default SideBar