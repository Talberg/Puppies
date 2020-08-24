import React from 'react'
import './WebPageHolder.scss'

function WebPageHolder(props) {

    return (
        <div className='cards'> <div className='card-title'><h2>Weed
             Diary</h2></div>
            <div className='row'>
                <div className='col-sm'><div className='card-img'><img className='img1' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3cGGHCkTbOYiXlfcYQicZYYr5dfItWyXmXIQnC7Ns11kF_1LvGm4AHk_E3t4Z4PEP7sFHpa99gk6el865h05irL77gPZ-EUvQnJqto_MfIqLDqBuvSgdM1rs0B7d1OcIfUeu2_INArJCVzAIeyjFnKymQ=w1808-h843-no?authuser=0' ></img></div>
                </div>
                <div className='col-sm'><div className='cardInfo1' >
                    <h3> Sign-Up Page</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Passport.js</li>
                            <li>MySQL Database</li>
                            <li>Validation on required fields</li>


                        </ul></h4>
                </div></div>
            </div>
            <div className='row'>
                <div className='col-sm'>   <h3> Diary Entry</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>Autofill for Strain and Dispensary fields </li>
                            <li>Dropdown menus on Type  and Consumption </li>
                            <li>Email with these notes will be sent to you on completion of the form </li>


                        </ul></h4></div>
                <div className='col-sm'><div className='card-img'><img className='img2' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3cOoTWBHosjV0TdirIxSOmFTaNE2gkU8OqswiScXDgapu8nMwwrf7g5GxBPLWy2B6aRtIExoZAHkPDA_92rvawc_bc_5rG1Oh0Q9Q9NqC9J4itL-NgUle2w2-rGiCMwB-eL24GNA5rNu1RMiF9ci-hYGA=w1475-h843-no?authuser=0' ></img></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>  <div className='card-img'><img className='img2' width='100%' src='https://lh3.googleusercontent.com/pw/ACtC-3cZwzJbvXW_z2eV--d5GvMzQOd1bXQTQdcedQaTBExR0nRReBJO29w0jklXD55qjzf6OzmNvAswYV16eu-wloKWTm1YfIQWw08b_pd2eJIJVmVpW_ROWPda10y4SdmtiutZDQabm5ztMSjJa0TmjjTn8A=w1470-h843-no?authuser=0' ></img></div></div>
                <div className='col-sm'>
                    <h3> Note Display</h3>
                    <hr></hr>
                    <h4>
                        <ul>
                            <li>This is where your saved entries are displayed  </li>
                            <li>Notes have the "delete' and 'update" feature using Node.js as a sever </li>
                            <li>All notes are displayed newest to oldest from the database time stamp </li>


                        </ul></h4>

                </div>
            </div>
           




        </div>
    )

}

export default WebPageHolder