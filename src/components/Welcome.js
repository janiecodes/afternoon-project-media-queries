import React from 'react'
import Header from './Header'

export default function Welcome(){
    return(
        <div className="welcome-box">
            <Header/>
            <div className="welcome-content">
                <h2>Welcome to our studio!</h2>
                <h1>IT'S NICE TO MEET YOU</h1>
                <button className="tell-me-more">TELL ME MORE</button>
            </div>
        </div>
    )
}
