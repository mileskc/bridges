import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return(
		<div className = "contact">
			<a id="contactSection">
				<div className = "contactQs">
					<h2>want to book us?</h2>
					<h2>have any questions?</h2>
					<h2>say hello:</h2>
				</div>
			</a>
			<form className = "contactForm" name="contact" method="post">
				<input type="hidden" name="form-name" value="contact" />
				<label for = "name">Name</label>
				<input className = "nameInput" type = "text" name = "name"/>
				<label for = "email">Email</label>
				<input className = "emailInput" type = "text" name = "email"/>
				<label for = "message">Message</label>
				<textarea className = "messageInput"></textarea>
				<button type="submit">SEND</button>
			</form>
		</div>
	)
}

export default Contact