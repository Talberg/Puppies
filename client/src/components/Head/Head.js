import React from 'react'
import './Head.scss'
import Home from '../../pages/Home/Home'



function Head (props){

    return(
        <div className='headBackground' >
           <div><h1>Alexander Talberg</h1></div> <h5> FULL-STACK WEB DEVELOPER <div><div  className='gitHub' ><a href='https://github.com/Talberg' > <i class="fab fa-github"></i> </a> </div>  </div> </h5>  </div>       
    )
}

export default Head


