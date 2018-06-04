import React, { Component } from 'react';
import '../style/inquiryForm.css';
import Logo from '../style/images/paradise_background_p.png';
import LargeButton from '../components/LargeBtn';


class InquiryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false
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

<div className="inquiry-container">


            <div className="inquiry-form">
                <div id="inquireModal" className={"inquiry-form-" + (this.state.modalOpen ? 'open' : 'closed')}>
                    <div className="inquiry-form-container">
                        <img src={Logo} className="inquiry-background-logo" alt="logo" />

                        <div onClick={() => { this.closeModal() }}className="inq-cls-btn">X</div>

                        <div className="inquiry-title">Inquiry form</div>

                        <div className="2">
                            <div className="inquiry-input-lable-left">Your Name</div><div className="inquiry-input-lable-right">Your Email</div>
                        </div>
                        <div className="3">
                            <input className="inquiry-input-left" /><input className="inquiry-input-right" />
                        </div>
                        <div className="4">
                            <div className="inquiry-input-lable-left">Arrival</div><div className="inquiry-input-lable-right">Departure</div>
                        </div>
                        <div className="5">
                            <input className="inquiry-input-left" /><input className="inquiry-input-right" />
                        </div>
                        <div className="6">
                            <div className="inquiry-input-lable-left">Guest</div><div className="inquiry-input-lable-right">Apartment</div>
                        </div>
                        <div className="7">
                            <input className="inquiry-input-left" /><input className="inquiry-input-right" />
                        </div>
                        <div className="8">
                            <div className="inquiry-input-lable-comments">Comments</div>
                        </div>
                        <div className="9">
                            <input className="inquiry-input-comments" />
                        </div>
                        <div className="inquiry-addt-text">
                            <div className="inquiry-select-addt">Please select additional items:</div>
                        </div>
                        <div className="inquiry-select-section">
                            <input className="inquiry-checkbox" type="checkbox" /><div className="inquiry-addt-text">I need a Kinderbed</div>
                            <input className="inquiry-checkbox" type="checkbox" /><div className="inquiry-addt-text">I need baby chair</div>
                        </div>

                        <div className="inquire-button-container">
                            <LargeButton styleClass="inquiry-button">INQUIRE NOW</LargeButton>
                        </div>

                    </div>
                </div>
            </div>
</div>

        )
    }
}
export default InquiryForm
