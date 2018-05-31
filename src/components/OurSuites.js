import React, { Component } from 'react'
import '../style/oursuites.css'

class OurSuites extends Component{
    render() {
        return(
            <section className="our-suites-comp">
                <div className="suites-head">
                    <h3>Our suites</h3>
                    <div className="suite-flipper">
                        <p className="prev-suite-num">06<span className="arrow">↓</span></p>
                        <p className="next-suite-num"><span className="arrow">↓</span>02</p>
                    </div>
                </div>
                <section className="suites-info">
                    <div className="suites-img" alt="Condo Master Bedroom"/>
                    <div className="suite-detailed-info">
                        <h4>Garden Secret</h4>
                        <div className="guest-price-info">
                            <p className="guest-capacity">Max guests: 2, infants: 1</p>
                            <p className="price">from 178 EUR</p>
                        </div>
                        <div className="details-box">
                            <h5>DETAILS</h5>
                            <p>This is brand new, deluxe, studio apartment with private balcony and sea view. Breakfast is included in price and guests have access to pool and sun terrace area with sea view. <br />The studio apartment is brand new and 35 sqm big and has a king size double bed, private bathroom with shower, kitchenette which is equipped with stove top, fridge, ...</p>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default OurSuites