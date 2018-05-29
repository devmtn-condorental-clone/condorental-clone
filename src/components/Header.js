import React, {Component} from 'react';
import '../style/header.css';
import LOGO from '../style/images/logo_2x.png';




class Header extends Component{
    render(){
        return(

            <div className="header-main-container">
            <div className="header-logo-container"><img src={LOGO} className="header-logo" alt="Logo"/>
            <div className="header-main-text">MENU</div>
            </div>
            
            <div className="header-social-container"></div>

            </div>
        )
    }
}

export default Header;
