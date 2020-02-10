import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return(
		<div className = "contact">
			{/* <h1>Contact</h1> */}
			<div className = "contactQs">
				<h2>want to book us?</h2>
				<h2>have any questions?</h2>
				<h2>say hello:</h2>
			</div>
			<form className = "contactForm">
				<label for = "name">Name</label>
				<input className = "nameInput" type = "text" name = "name"/>
				<label for = "email">Email</label>
				<input className = "emailInput" type = "text" name = "email"/>
				<label for = "message">Message</label>
				<textarea className = "messageInput" type = "text"/>
				<button>SEND</button>
			</form>
		</div>
	)
}

export default Contact