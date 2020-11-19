import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchDisplay from './SearchDisplay';

const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDQuFpLd3kiK3o1EAyc6v1OLgMKhzU9lH0&cx=efb2621b856944415&q=`;
export default class Search extends Component {
	constructor(){
		super()
		this.state={
			data:''
		}
	}
	displaySearch=(data)=>{
		this.setState({data: data})
	}
	render() {
		return (
			<>
				<SearchBar data={(data)=>this.displaySearch(data)}/>
				<SearchDisplay search_result={this.state.data}/>
			</>
		);
	}
	componentDidMount(){
		let search_name = this.props.match.params.name;
		fetch(`${url}${search_name}`, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{this.setState({data: data.items})})
	}
}
