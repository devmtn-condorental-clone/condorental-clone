import React, {Component} from 'react';
import '../style/style.css';



class Header extends Component{
    render(){
        return(

            <div className="header-main-container">

        <div className="header-logo"></div>
        <div className="header-menu"></div>
        <div className="header-social"></div>

            </div>
        )
    }
}

export default Header;