import React from 'react';
import './SearchBar.css'
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const SearchBar = (props) => {
  const getInput=()=>{
  	let input = document.getElementById('searchbar_input').value;
  	props.history.push(`/search/${input}`)
  	let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${input}`;
  	fetch(url, {method:'GET'})
  	.then((res)=>res.json())
  	.then((data)=>{
  		props.data(data.items);
  	})
  }
  return (
    <>
    	<nav className="navbar navbar-expand-md navbar-light bg-white pt-0 pt-lg-3 pb-lg-4 pb-0 sticky-top">
    		<Link to="/" className="navbar-brand"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"/></Link>
    			<ul className="navbar-nav mx-auto">
    				<input id="searchbar_input" type="text" placeholder="Search Here!!"/>
    				<div className="input-group-prepend">
    					<span className="input-group-text"><i className="fa fa-search" onClick={getInput}></i></span>
    				</div>
    			</ul>
    			<ul className="navbar-nav ml-auto d-none d-lg-flex">
    				<li className="nav-item"> 
    					<a href="#" className="nav-link">Gmail</a>
    				</li>
    				<li className="nav-item">
    					<a href="#" className="nav-link">Images</a>
    				</li>
    				<li className="nav-item">
    					<i className="fa fa-user nav-link" aria-hidden="true"></i>
    				</li>
    			</ul>
    	</nav>
    </>
  )
}

export default withRouter(SearchBar);
