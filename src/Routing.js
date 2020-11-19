import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';

const Routing = (props) => {
  return (
    <>
    	<BrowserRouter>
    		<Route exact path="/" component={Home}></Route>
    		<Route exact path="/search/:name" component={Search}></Route>
    	</BrowserRouter>
    </>
  )
}

export default Routing;