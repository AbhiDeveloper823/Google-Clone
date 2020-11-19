import React from 'react';
import './SearchDisplay.css';

const SearchDisplay = (props) => {
  const renderSearch=(data)=>{
    console.log(data.search_result)
  	if(data.search_result){
  		console.log(data.search_result.length);
      if(data.search_result.length > 0){
        return data.search_result.map((item)=>{
          return(
            <>
              <div className="result">
                <a id="site" href={`${item.formattedUrl}`}  className="text-dark">{item.displayLink}</a><br/>
                <a id="head" href={`${item.link}`} className="result_head" >{item.title}</a>
                <p id="para" className="text-muted">{item.snippet}</p>
              </div>
            </>
          )
        })
      }
  		else{
        return(
          <h4 className="text-center">Sorry...But No Result was found!!</h4>
        )
      }
  	}
    else{
      return(
        <img id="loader_img" src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" alt=""/>
      )
    }
  }
  return (
    <>	
    	<div className="container px-4 pb-4 pt-2">

    		{renderSearch(props)}
    	</div>
    	
    </>
  )
}

export default SearchDisplay;