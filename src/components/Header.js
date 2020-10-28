import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }

    

    render(){
        return(
            <header>
                <div className="header-container">
                    <img className="bootstrap" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                    <nav>
                            <div className="navigation-items" href="#services">SERVICES</div>
                            <div className="navigation-items" href="#portfolio">PORTFOLIO</div>
                            <div className="navigation-items" href="#about">ABOUT</div>
                            <div className="navigation-items" href="#team">TEAM</div>
                            <div className="navigation-items" href="#contact">CONTACT</div>
                    </nav>
                </div> 
                <button className="hamburger">MENU &#9776;</button>
            </header>
        )
    }
}

export default Header