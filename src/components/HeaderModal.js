import React from 'react';
import { Component } from 'react';
import '../style/headerModal.css';


class HeaderModal extends Component {
    constructor(props){
        super(props)

        this.state ={
            modalToggle: ''
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

       
    }

    openModal(){
        var modal = document.getElementById('headerMenuModal');
        // var modalBtn = document.getElementById('modalBtn');

        modal.style.display ='block'
        // document.getElementById('headerMenuModal').classList.toggle("menu-modal-open");
    }

    closeModal(){
       var modal = document.getElementById('headerMenuModal');
    //    var clsBtn = document.getElementsByClassName('closeBtn')[0]

       modal.style.display = 'none'
    }

    render(){
        return(
            
            <div className="modal-container">
            <div onClick={()=>{this.openModal()}} id="modalBtn" className="menu-button">MENU</div>

            <div id="headerMenuModal" className="menu-modal">

            <div className="modal-content">
            <span onClick={()=>{this.closeModal()}} id="modalClsBtn" className="cls-btn">&times;</span>
            <p>Temp Modal</p>
            </div>

            </div>
            </div>
        )
    }

}
export default HeaderModal

