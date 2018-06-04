import React, { Component } from 'react'
import '../style/oursuites.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

class OurSuites extends Component{
    componentDidMount(){
        AOS.init()
    }

    componentDidUpdate(){
        AOS.refresh()
    }
    render() {
        return(
            <section className="our-suites-comp">
                <div className="suites-head">
                    <h3>Our suites</h3>
                    <div className="suite-flipper">
                        <div className="left-select">
                            <p className="prev-suite-num">06</p>
                            <div className="arrow-left">↓</div>
                        </div>
                        <div className="right-select">
                            <div className="arrow-right">↓</div>
                            <p className="next-suite-num">02</p>
                        </div>
                    </div>
                </div>
                <section className="suites-info">
                    <div data-aos-anchor=".suites-head" data-aos-delay="500" data-aos-anchor-placement="top-top" data-aos-once="true" data-aos="unveil" className="img-cover"/>
                    <div className="suites-img" alt="Condo Master Bedroom"/>
                    <div className="suite-detailed-info">
                        <div data-aos-anchor=".suites-head" data-aos-anchor-placement="bottom-center" data-aos-once="true" data-aos="fadeIn"  className="before-details"/>
                        <h4 data-aos-anchor=".suites-head"  data-aos-anchor-placement="top-top" data-aos-once="true" data-aos="fade-up" data-aos-delay="500" >Garden Secret</h4>
                        <div data-aos-anchor=".suites-head" data-aos-anchor-placement="top-top" data-aos-once="true" data-aos="fade-up" data-aos-delay="600" className="guest-price-info">
                            <p className="guest-capacity">Max guests: 2, infants: 1</p>
                            <p className="price">from 178 EUR</p>
                        </div>
                        <div className="details-box">
                            <h5 data-aos-anchor=".suites-head" data-aos-delay="600" data-aos-anchor-placement="top-top" data-aos-once="true" data-aos="fade-up" >DETAILS</h5>
                            <p data-aos-anchor=".suites-head" data-aos-delay="600" data-aos-anchor-placement="top-top" data-aos-once="true" data-aos="fade-up" >This is brand new, deluxe, studio apartment with private balcony and sea view. Breakfast is included in price and guests have access to pool and sun terrace area with sea view. <br />The studio apartment is brand new and 35 sqm big and has a king size double bed, private bathroom with shower, kitchenette which is equipped with stove top, fridge, ...</p>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default OurSuites