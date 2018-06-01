import React from 'react';
import { Component } from 'react';
import '../style/headerModal.css';
import Logo from '../style/images/menu-logo_2x.png';


class HeaderModal extends Component {
    constructor(props){
        super(props)

        this.state ={
            modalOpen:false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)


    }

    openModal() {
        console.log("fire?");
        this.setState({modalOpen:true})
        // var modalBtn = document.getElementById('modalBtn');

        //modal.style.display = 'block'
        // document.getElementById('headerMenuModal').classList.toggle("menu-modal-open");
    }

    closeModal() {
        this.setState({modalOpen:false})
        //    var clsBtn = document.getElementsByClassName('closeBtn')[0]

        //modal.style.display = 'none'
    }

    render() {
        return (

            <div className="modal-container">
                <div onClick={() => { this.openModal() }} id="modalBtn" className="menu-button">MENU</div>

                <div id="headerMenuModal" className={"menu-modal-" + (this.state.modalOpen?'open':'closed')}>

                    <div className="modal-content">


                        <div className="header-modal-text-container">
                            <div className="header-modal-logo-container"><img className="header-modal-menu-logo" src={Logo} alt="logo" /></div>
                            <div className="header-modal-content-container">
                                <div className="header-modal-close-text">
                                    <span onClick={() => { this.closeModal() }} id="modalClsBtn" className="cls-btn">CLOSE</span>
                                </div>
                                <div className="header-modal-close-icon">
                                    <span onClick={() => { this.closeModal() }} id="modalClsBtn" className="cls-btn-graphic">X GOES HERE</span>
                                </div>
                                <div className="header-modal-column-1">
                                    <div className="modalFont-home">Home</div>
                                    <div className="modalFont" >Apartments</div>
                                    <div className="modalFont">Our Services</div>
                                </div>
                                <div className="header-modal-line"></div>
                                <div className="header-modal-column-2">
                                    <div className="modalFont">About</div>
                                    <div className="modalFont">Island attractions</div>
                                    <div className="modalFont">Blog</div>
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

