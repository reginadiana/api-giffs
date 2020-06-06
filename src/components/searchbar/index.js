import React, { Component } from 'react';
import { Input } from 'antd'
const { Search } = Input

class SearchBar extends Component {
	constructor() {
		super() 
		this.state = {
			term: ''
		}
	}

	/*Toda vez que o input for atualizado atualizamos
	o estado e passamos um props para APP*/
	onInputChange(term) {
		this.setState({ term })
		this.props.onTermChange(term);
	}

	render(){
		return(
			<div className="search">
					<Search 
						style={{ width: "50%", borderColor: "rgb(0, 187, 254)", borderWidth:"2px"  }}
						placeholder="Search for some giff"
						onChange={ event => this.onInputChange(event.target.value)}
					/>
			</div>
		);
	}

}

export default SearchBar;