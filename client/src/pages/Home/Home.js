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
import SupportUs from '../../components/SupportUs/About'
import Donate from '../../components/Donate/About'
function Home(props) {

  

    return (
    <div className='BG'>
       <About></About>
       <Donate></Donate>
       <WebPageHolder></WebPageHolder>
       <SupportUs></SupportUs>
       
       

       

        
         </div>
    );
  
}

export default Home;