import React, { Component } from 'react';
import './style.css';

/*Components*/
import SearchBar from './components/searchbar/index'
import GifList  from './components/giflist/index'
import Header from './components/header/index'

/*Lib para fazer chamadas API*/
import request from 'superagent'

class App extends Component {
	constructor(){
		super();

		this.state = {
			gifs: [ ]
		}
	};

	/*O valor passado por props de SearchBar é usado aqui*/
	handleTermChange(term) {
		const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g,'+')}&api_key=1YIx5yclZNTG6Ghrm95crUchAdaNwTxl`

		request.get(url, (err, res) => {
			this.setState({ gifs: res.body.data })
		});
	}
	render(){
		return(
			<>
			<Header/>
				<div className="greeting">
					< SearchBar onTermChange={term => this.handleTermChange(term)}/>
					<GifList gifs={this.state.gifs}/>
				</div>
			</>
		);
	}
}



export default App;
