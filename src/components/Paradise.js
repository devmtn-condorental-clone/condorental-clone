import React, { Component } from 'react'
import '../style/paradise.css'
import leftimg from '../style/images/paradise_left.jpg'
import centerImg from '../style/images/paradise_center.jpg'
import parSteak from '../style/images/paradise_steak.jpg'
import bgImg from '../style/images/paradise_background_p.png'

class Paradise extends Component{
    render() {
        return(
            <section className="parallax_paradise_cont">
                <section className="paradise-comp">
                    <img className="pool-img" src={leftimg} alt="Pool View"/>
                    <div className="left-shadow shadow"/>
                    <div className="right-shadow shadow"/>
                    <img className="building-img" src={centerImg} alt="Building View From Water"/>
                    <img className="steak-img" src={parSteak} alt="Juicy Garnished Steak"/>
                    <img className="bg-img" src={bgImg} alt="Pine Tree Watermark"/>
                    <section className="paradise-content">
                        <h2>Paradise between land and sea</h2>
                        <p>Boutique Pine Tree Resort is a charming 4 star boutique hotel that is located in the lush village of Saplunara on the Island of Mljet.</p>
                        <br />
                        <p>Suspended between land and sea, Boutique Pine Tree Resort is an Adriatic style villa offering an intimate location, fresh white décor but with just the right touch of colour to enhance its lush surroundings! The large windows and spacious terraces allow you to experience the remarkable colours of the scenery which change from sunrise to sunset.</p>
                    </section>
                </section>
            </section>
        )
    }
}

export default Paradise