import React from 'react'
import GifItem from '../../components/gifitem/index'

/*Componente funcional sem estado*/
const GifList = (props) => {

	/*Vamos receber a props e percorrer o array*/
	const gifItems = props.gifs.map((image) => {
		return <GifItem key={image.id} gif={image}/>
	})

	return (
		<div className="gif-list">{gifItems}</div>
	);
};

export default GifList;