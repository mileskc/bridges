import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return(
		<div>
			<h1>Contact</h1>
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