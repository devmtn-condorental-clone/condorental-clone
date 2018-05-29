import React, { Component } from 'react'
import LargeBtn from './LargeBtn'
export default class Welcome extends Component{
    render(){
        return(
            <div className="welcome-comp" style={{height: "100vh", width: "100%", backgroundImage: "url('')"}}>
                <h1 style={{fontSize: "5em"}}><span className="pink-pinetree">Pinetree</span> Boutique Apartments</h1>
                <p>We Create Memories That Last Forever.</p>
                <LargeBtn styleClass="experience-btn">EXPERIENCE PINETREE</LargeBtn>
                <div className="upper-right">
                    <p>Switch to</p>
                    <button className="lang-btn">AM</button>
                </div>
                <div className="scroll-tag">
                    <p>Scroll</p>
                    {/* <svg /> */}
                </div>
            </div>
        )
    }
}