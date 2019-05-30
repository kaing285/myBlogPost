import React from 'react'
import Titles from './title'
import Form from './form'
import WeatherAPI from './API'

class Weather extends React.Component{
	render(){
		return(
			<div>
				<h4>Weather page is developing</h4>
				<Titles/>
				<Form/>
				<WeatherAPI/>
			</div>
			)
	}
}
export default Weather