import React, { Component } from 'react'
import LargeBtn from './LargeBtn'
import '../style/booking.css'
import { toggleCondoModal } from '../ducks/reducer'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker'
import { openInfoModal } from '../ducks/reducer'
import GuestsPicker from './GuestsPicker';

class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            transY: props.yOffset < 300 ? props.yOffset/3 : 100
        }
    }

    componentDidUpdate(prevProps){
        const { yOffset } = this.props
        if(prevProps.yOffset !== yOffset){
            let diff = yOffset < 300 ? yOffset/3 : 100
            this.setState({ transY: diff })
        }
    }
    render() {
        let medium = window.innerWidth < 900 ? true : false
        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        const { condoSelected, arrivalDate, departureDate, language, condosModalOpen, toggleCondoModal } = this.props
        let arrive = new Date(arrivalDate)
        let depart = new Date(departureDate)
        return (
                <section style={{top: `calc(100vh + ${window.innerWidth < 1070 ? '0px' : '0px'} - ${Math.floor(this.state.transY)}px)`}} className="booking-comp">
                    {/* <CondoSelectModal /> */}
                    <DatePicker okLabel={<span>Ok</span>} className="arrival-date booking-section">
                        <div >
                            <h4>ARRIVAL</h4>
                            <div className="date">
                                <span className="day">{arrive.getDate()}</span>
                                <div className="month-year">
                                    <p className="month">{months[arrive.getMonth()]}</p>
                                    <p className="year">{arrive.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </DatePicker >
                    <div className="thin-grey" />
                    <DatePicker className="booking-section departure-date">
                        <div >
                            <h4>DEPARTURE</h4>
                            <div className="date">
                                <span className="day">{depart.getDate()}</span>
                                <div className="month-year">
                                    <p className="month">{months[depart.getMonth()]}</p>
                                    <p className="year">{depart.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </DatePicker>
                    <div className="thick-grey" />
                    {/* <div className="guests booking-section">
                        <h4>GUESTS</h4>
                        <p className="guestnum">1</p> */}
                        <GuestsPicker />
                    {/* </div> */}
                    <div className="btn-container booking-section">
                        <LargeBtn arg1={condosModalOpen} handleClick={toggleCondoModal.bind(this)} styleClass="choose-apt">{condoSelected.name ? condoSelected.name : (language === 'Foreign' ? 'CHOOSE APARTMENT' : 'CHOOSE CONDO')}</LargeBtn>
                        <div className={`inquire-now-container`}>
                            <LargeBtn handleClick={this.props.openInfoModal} styleClass={`inquire-now ${!condoSelected.name && 'disabled'}`}>INQUIRE NOW</LargeBtn>
                            {
                                condoSelected.name
                                ?
                                null
                                :
                                <div className="disabled-display">
                                    <span className="disabled-span">FIRST CHOOSE {language === 'Foreign' ? 'APPARTMENT' : 'CONDO'}</span>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            
        )
    }
}

function mapStateToProps(state){
    return{
        condosModalOpen: state.condosModalOpen,
        condoSelected: state.condoSelected,
        arrivalDate: state.arrivalDate,
        departureDate: state.departureDate,
        language: state.language,
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps, { toggleCondoModal, openInfoModal })(Booking)