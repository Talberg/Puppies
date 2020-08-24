import React from 'react'
import './PassGen.scss'

function WebPageHolder(props) {

    return (
        <div className='cards'> <div className='card-title'><h2>
            Simple Password Generator </h2></div>
            <div className='row'>
                <div className='col-sm'><div className='card-img'><img className='img1' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3fb2Rig3iiGt-JwGW4jKxXK3WBzVoJbO9Uyus53elF97zQf2PhDAr9pmsmYL1dP_bIGLyrVEqa6ot97VfO4VFzprZHCu6bFinFA4hjofvBDeO4JP2ymsZQCowl9s0aun2GbBk489CaWPynZAG0CZ4SSkA=w959-h467-no?authuser=0' ></img></div>
                </div>
                <div className='col-sm'><div className='cardInfo1' >
                    <h3> Pop-Up Questions</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Capital Letters?</li>
                            <li>Lower Case Letters?</li>
                            <li>Numbers?</li>
                            <li>Special Characters?</li>


                        </ul></h4>
                </div></div>
            </div>
            <div className='row'>
                <div className='col-sm'>   <h3> Character Count</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Desired character count is then asked </li>
                            <li>and then ... </li>
                           


                        </ul></h4></div>
                <div className='col-sm'><div className='card-img'><img className='img2' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3d4rz2MwsfP-dtrfXiinC8ppwy7O1DF-32-H8K4LyqcbqWleOKFAkrHNWjVTovN6lILZcVvE2XjuQqmmNhaeI6RVzDqT9cvM4iuHWs3wK2Rgq8CaJEyQqhEi4QOfX_mBjaoAicKAbehZe3bexx8m_6HSQ=w959-h453-no?authuser=0' ></img></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>  <div className='card-img'><img className='img2' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3dt0ksCVYa9y4pTh9RQEdC727ItEPIkayn5J0qTqqYHvImTak8PfaM6ZvHczFcN-s6sxJ4v8G_CzCCmTGApdSRCscLi-mqEVF-WFoZWmSdoIVdA_9zQ-7OPietDJgphK2xHVCQuSESMseDQDfw1D2lXPA=w959-h455-no?authuser=0' ></img></div></div>
                <div className='col-sm'>
                    <h3> Password Generated</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Using your answers the JavaScript creates a random password  </li>
                            <li>For your convenience  there is a copy to clipboard button </li>
                            


                        </ul></h4>

                </div>
            </div>
           




        </div>
    )

}

export default WebPageHolder