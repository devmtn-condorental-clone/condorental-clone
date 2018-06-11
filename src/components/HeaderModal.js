import React from 'react';
import { Component } from 'react';
import '../style/headerModal.css';
import Logo from '../style/images/menu-logo_2x.png';


class HeaderModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false,
           
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
      


    }

    openModal() {
        this.setState({ modalOpen: true })
        
    }

    closeModal() {
        this.setState({ modalOpen: false })
    
    }

    render() {

 

        return (

            <div className="modal-container">

                {this.state.modalOpen ?
                    <div onClick={() => { this.closeModal() }} id="modalBtn" className="menu-button2">

                        {this.state.modalOpen ? 'CLOSE' : 'MENU'}
                        {/* <span className="close-x-animation"></span> */}
                        </div> :
                    <div onClick={() => { this.openModal() }} id="modalBtn" className="menu-button">

                        {this.state.modalOpen ? 'CLOSE' : 'MENU'}
                        <span className="ham-container">
                            <span className="hamburger"></span>
                        </span>
                    </div>

                }

                <div id="headerMenuModal" className={"menu-modal-" + (this.state.modalOpen ? 'open' : 'closed')}>

                    <div className="modal-content">


                        <div className="header-modal-text-container">
                            <div className="header-modal-logo-container"><img className="header-modal-menu-logo" src={Logo} alt="logo" /></div>
                            <div className="header-modal-content-container">

                                <div className="header-modal-column-1">
                                    <div className="modalFont-home">
                                    <a class="varient-1" href="" className="modalFont-home">Home</a></div>
                                    <div className="modalFont2"><a href="" className="modalFont2">Apartments</a></div>
                                    <div className="modalFont3"><a href="" className="modalFont3">Our Services</a></div>
                                </div>
                                <div className="header-modal-line"></div>
                                <div className="header-modal-column-2">
                                    <div className="modalFont1"><a href="" className="modalFont1">About</a></div>
                                    <div  className="modalFont2"><a href="" className="modalFont2">Island attractions</a></div>
                                    <div  className="modalFont3"><a href="" className="modalFont3">Blog</a></div>
                                </div>  
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }

}
export default HeaderModal

