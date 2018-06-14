import React, { Component } from 'react';
import '../style/header.css';
import Logo from '../style/images/logo_2x.png';
import FaceBookLite from '../style/images/facebook-light.svg';
import FaceBookDark from '../style/images/facebook-dark.svg';
import InstaLight from '../style/images/instagram-light.svg';
import InstaDark from '../style/images/instagram-dark.svg';
import TripLight from '../style/images/tripadvisor-light.svg';
import TripDark from '../style/images/tripadvisor-dark.svg';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            facebook: FaceBookLite,
            instagram: InstaLight,
            tripadvisor: TripLight,
            modal: ''

        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {

        document.getElementById('bar1').classList.toggle("change_bar1");
    }


    render() {
        return (
            <div>
        
            <div className="header-main-container">
            <div className="responsive-header-border">HR</div>
                <div className="header-logo-container"><img src={Logo} className="header-logo" alt="Logo" />

                </div>


                <div className="header-social-container">
                    <div><img className="header-social-icon-fb"
                        src={this.state.facebook}
                        onMouseEnter={() => {
                            this.setState({
                                facebook: FaceBookDark
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                facebook: FaceBookLite
                            })
                        }}
                        alt="facebook-logo" /></div>
                    <div><img className="header-social-icon-ig" src={this.state.instagram}
                        onMouseEnter={() => {
                            this.setState({
                                instagram: InstaDark
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                instagram: InstaLight
                            })
                        }} alt="insta-logo" /></div>
                    <div><img className="header-social-icon-ta" src={this.state.tripadvisor}
                        onMouseEnter={() => {
                            this.setState({
                                tripadvisor: TripDark
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                tripadvisor: TripLight
                            })
                        }} alt="tripadvisor-logo" /></div>
                </div>

            </div>
            </div>
        )
    }
}

export default Header;
