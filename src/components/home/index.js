import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export function Home() { 
	return (
		<>
			<Link to="/other-page"><button className="home-button">Other page</button></Link>
		</>
	);

}