import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import Joke from "../../components/Joke"
import "./Home.scss";
import About from '../../components/About/About'
import Pictures from '../../components/Pictures/Pictures'
import WebPageHolder from '../../components/WebPageHolder/WebPageHolder'
import PassGen from '../../components/PassGen/PassGen'
import NatPark from '../../components/NatPark/NatPark'
function Home(props) {

  

    return (
    <div className='BG'>
       <About></About>
       <WebPageHolder></WebPageHolder>
       <PassGen></PassGen>
       <NatPark></NatPark>

       

        
         </div>
    );
  
}

export default Home;