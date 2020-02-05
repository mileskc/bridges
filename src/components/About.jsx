import React from 'react'
import '../styles/about.css'
import {headshots} from '../headshots'

const About = () => {
  return(
    <div className = "about">
			<h1>About</h1>
			<h2>Brand Statement (NYC based vocal group etc...)</h2>
			<h1>Members</h1>
			<div className = "members">
				{headshots.map(member => {
					return(
					<div>
						<img className = "headshot" src={member.img}/>
						<h1 className = "memberName">{member.name}</h1>
					</div>
					)
				}
				)}
				<h3>There will be a grid of individual headshots in this space</h3>
			</div>
		</div> 
  )
}

export default About