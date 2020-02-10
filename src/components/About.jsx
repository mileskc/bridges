import React from 'react'
import '../styles/about.css'
import {headshots} from '../headshots'

const About = () => {
  return(
    <div className = "about">
			<h1>About</h1>
			<h2>Brand Statement (NYC based vocal group etc...)</h2>
			{/* <h1>Members</h1> */}
			<div className = "members">
				{headshots.map(member => {
					return(
					<div>
						<img className = "headshot" src={member.img}/>
						<h4 className = "memberName">{member.name}</h4>
					</div>
					)
				}
				)}
			</div>
		</div> 
  )
}

export default About