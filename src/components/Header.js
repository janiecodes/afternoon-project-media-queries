import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <header>
                <div className="header">
                    <img className="bootstrap" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                 
                <nav>
                    <ul className="navigation-bar">
                        <li className="navigation-items">SERVICES</li>
                        <li className="navigation-items">PORTFOLIO</li>
                        <li className="navigation-items">ABOUT</li>
                        <li className="navigation-items">TEAM</li>
                        <li className="navigation-items">CONTACT</li>
                    </ul>
                </nav>
                </div> 
            </header>
        )
    }
}

export default Header