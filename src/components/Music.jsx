import React from 'react'
import '../styles/music.css'

const Music = () => {
	return(
    <div className = "music">
			<h1>Music</h1>
			<iframe src="https://player.vimeo.com/video/387215492" width="640" height="338" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
			<p><a href="https://vimeo.com/387215492">Lovely_BRIDGES</a> from <a href="https://vimeo.com/user93878733">The Vocal Company</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    </div>
	)
}

export default Music