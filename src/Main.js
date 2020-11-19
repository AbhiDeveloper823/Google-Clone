import React from 'react';
import './Main.css';
import {withRouter} from 'react-router-dom';

const Main = (props) => {
  const search = ()=>{
    let input = document.getElementById('search_input').value;
    if(input.length){
    	props.history.push(`/search/${input}`)
    }
    else{
    	alert('Please Enter your search Below!!')
    }
    
  }
  const lucky = ()=>{
  	alert('We are happy..To know that you are Happy!!')
  }
  return (
    <>
    	<div className="logo">
    		<img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
    		<input id="search_input" type="text" placeholder="Please Enter your Search"/>
    		<div className="google_btn">
    			<button className="text-muted p-2" onClick={search}>Google Search</button>
    			<button className="text-muted p-2" onClick={lucky}>I'm Feeling Happy</button>
    		</div>
    	</div>
    </>
  )
}

export default withRouter(Main);

