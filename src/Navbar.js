import React from 'react';
import './Navbar.css';


const Navbar = (props) => {
  return (
    <>
    	<nav className="navbar navbar-expand-md navbar-light bg-white">
    		<button className="navbar-toggler" data-toggle="collapse" data-target="#nav">
    			<i className="fa fa-bars"></i>
    		</button>
    		<div className="collapse navbar-collapse" id="nav">
    			<ul className="navbar-nav">
    				<li className="nav-item">
    					<a href="#" className="nav-link">About</a>
    				</li>
    				<li className="nav-item">
    					<a href="#" className="nav-link">Store</a>
    				</li>
    			</ul>
				<ul className="navbar-nav ml-auto">
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
    		</div>
    	</nav>
    </>
  )
}

export default Navbar;