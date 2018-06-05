import React, { Component } from 'react'
import '../style/paradise.css'
import leftimg from '../style/images/paradise_left.jpg'
import centerImg from '../style/images/paradise_center.jpg'
import parSteak from '../style/images/paradise_steak.jpg'
import bgImg from '../style/images/paradise_background_p.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Paradise extends Component{
    componentDidMount(){
        AOS.init({
            duration: 1000
        })
    }

    componentDidUpdate(){
        AOS.refresh()
    }
    render() {
        return(
            // <section className="parallax_paradise_cont">
                <section className="paradise-comp">
                    <div className="pool-img-box">
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos="slideDown" className="pool-shadow"/>
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos="slideDown" className="pool-img" style={{backgroundImage: `url(${leftimg})`}} alt="Pool View"/>
                    </div>
                    <div className="left-shadow shadow"/>
                    <div className="right-shadow shadow"/>
                    <div className="building-box">
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos="slideDown"  className="building-shadow"/>
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos="slideDown"  className="building-img" style={{backgroundImage: `url(${centerImg})`}} alt="Building View From Water"/>
                    </div>
                    <div className="steak-box">
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos="slideDown"  className="steak-shadow"/>
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos="slideDown"  className="steak-img" style={{backgroundImage: `url(${parSteak})`}} alt="Juicy Garnished Steak"/>
                    </div>
                    <img className="bg-img" src={bgImg} alt="Pine Tree Watermark"/>
                    <section className="paradise-content">
                        <h2 data-aos="fade-up" data-aos-once="true" data-aos-anchor=".paradise-content" data-aos-duration="500" >Paradise between land and sea</h2>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-anchor=".paradise-content" data-aos-delay="100" data-aos-duration="500">Boutique Pine Tree Resort is a charming 4 star boutique hotel that is located in the lush village of Saplunara on the Island of Mljet.</p>
                        <br />
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200" data-aos-anchor=".paradise-content" data-aos-duration="500">Suspended between land and sea, Boutique Pine Tree Resort is an Adriatic style villa offering an intimate location, fresh white décor but with just the right touch of colour to enhance its lush surroundings! The large windows and spacious terraces allow you to experience the remarkable colours of the scenery which change from sunrise to sunset.</p>
                    </section>
                </section>
            // </section>
        )
    }
}

export default Paradise