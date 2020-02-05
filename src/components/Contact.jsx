import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return(
		<div className = "contact">
			{/* <h1>Contact</h1> */}
			<div className = "contactQs">
				<h2>Want to book us?</h2>
				<h2>Have any questions?</h2>
				<h2>Say hello:</h2>
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