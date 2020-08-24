import React from 'react'
import './Natpark.scss'

function WebPageHolder(props) {

    return (
        <div className='cards'> <div className='card-title'><h2>
            National Park Search </h2></div>
            <div className='row'>
                <div className='col-sm'><div className='card-img'><img className='img1' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3cwMmi0w7fTXftUkRgnycoj-H36FEPx9Z4_hivAEqc2cFm3cM90hturJX70_i5cieQd9R7yUIl_Komb-w2GAtAhz8hXff84tIAD6l7ioEIj_kT8QwZocq5PRKO7wpc-u7pHhOK-5W1TYH7YOMHKgv9Xyg=w1920-h844-no?authuser=0' ></img></div>
                </div>
                <div className='col-sm'><div className='cardInfo1' >
                    <h3> Pop-Up Questions</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Search by the state </li>
                            <li>Autofill will help you</li>
                            <li>Search results displayed below the search bar</li>
                            <li>Using the NPS API</li>


                        </ul></h4>
                </div></div>
            </div>
            <div className='row'>
                <div className='col-sm'>   <h3> Monument Page</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Dynamic Pictures are shown from 3rd party API using the name of the Monument</li>
                            <li>Small description is provided by NPS API  </li>
                            <li>Weather also provided by NPS API  </li>

                           


                        </ul></h4></div>
                <div className='col-sm'><div className='card-img'><img className='img2' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3fVqP5DK3iX3zEV3xXUMmw0R6fLsmFAreKjC1JSeff9XEt8_our-_35qoqvZGdXbTtBe0E8zmKKQOKdzNPJqdiBuupcWwnk91pRuEw2JNXZqwdNLwvZ9e9SYHMS6S_WcUlsALuHt6koxRzZIZ1Se6ZQ5Q=w1821-h902-no?authuser=0' ></img></div>
                </div>
            </div>
          
           




        </div>
    )

}

export default WebPageHolder