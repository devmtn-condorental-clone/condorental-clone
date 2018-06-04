import React, { Component } from 'react'
import LargeBtn from './LargeBtn';
import '../style/booking.css';

class Booking extends Component {

    render() {
        return (
                <section className="booking-comp">
                    <div className="arrival-date booking-section">
                        <h4>ARRIVAL</h4>
                        <div className="date">
                            <span className="day">29</span>
                            <div className="month-year">
                                <p className="month">MAY</p>
                                <p className="year">2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="thin-grey" />
                    <div className="departure-date booking-section">
                        <h4>DEPARTURE</h4>
                        <div className="date">
                            <span className="day">5</span>
                            <div className="month-year">
                                <p className="month">JUN</p>
                                <p className="year">2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="thick-grey" />
                    <div className="guests booking-section">
                        <h4>GUESTS</h4>
                        <p className="guestnum">1</p>
                    </div>
                    <div className="btn-container booking-section">
                        <LargeBtn styleClass="choose-apt">CHOOSE APARTMENT</LargeBtn>
                        <LargeBtn styleClass="inquire-now">INQUIRE NOW</LargeBtn>
                    </div>
                </section>
            
        )
    }
}

export default Booking