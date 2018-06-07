import React, { Component } from 'react'
import LargeBtn from './LargeBtn'
import '../style/booking.css'
// import CondoSelectModal from './CondoSelectModal'
import { toggleCondoModal } from '../ducks/reducer'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker'

class Booking extends Component {
    constructor(){
        super()
        this.state = {
            transY: window.pageYOffset < 300 ? window.pageYOffset/3 : 100
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(){
        console.log(window.pageYOffset, window.innerHeight, this.state)
        let vH = window.innerHeight
        if(window.pageYOffset > 0 && window.pageYOffset < 300){
            this.setState({
                transY: window.pageYOffset/3
            })
        }
    }

    render() {
        window.onscroll = this.handleScroll
        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        const { condoSelected, arrivalDate, departureDate } = this.props
        let arrive = new Date(arrivalDate)
        let depart = new Date(departureDate)
        return (
                <section style={{top: `calc(100vh - ${Math.floor(this.state.transY)}px)`}} className="booking-comp">
                    {/* <CondoSelectModal /> */}
                    <DatePicker okLabel={<span>Ok</span>} className="arrival-date booking-section"  style={{width: "25%"}}>
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
                    <DatePicker style={{width: "25%"}} className="booking-section departure-date">
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
                    <div className="guests booking-section">
                        <h4>GUESTS</h4>
                        <p className="guestnum">1</p>
                    </div>
                    <div className="btn-container booking-section">
                        <LargeBtn arg1={this.props.condosModalOpen} handleClick={this.props.toggleCondoModal.bind(this)} styleClass="choose-apt">{condoSelected.name ? condoSelected.name : 'CHOOSE APARTMENT'}</LargeBtn>
                        <LargeBtn styleClass="inquire-now">INQUIRE NOW</LargeBtn>
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
        departureDate: state.departureDate
    }
}

export default connect(mapStateToProps, { toggleCondoModal })(Booking)