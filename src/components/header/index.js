import React from 'react'
import './style.css'
import rosquinha from '../../assets/rosquinha.png'

const Header = (props) => {

	return (
		<div className="div-header">
			<h1>ALL GIFS YOU WANT</h1>
			<h2>GIFS GIPHY</h2>
			<img src={rosquinha} className="rosquinha" alt="Rosquinha que gira"/>
			<h3>SEACH HERE AND <span style={{ color: "rgb(0, 187, 254)"}}> HAVE FUN</span></h3>
		</div>
	);
};

export default Header;