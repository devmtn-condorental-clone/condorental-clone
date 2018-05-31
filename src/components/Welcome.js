import React, { Component } from 'react'
import LargeBtn from './LargeBtn'

export default class Welcome extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         welcomeClasses: '',
    //         amBtnClass: ''
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         welcomeClasses: 'shown'
    //     })
    // }

    // componentDidUpdate(){
    //     const { welcomeClasses, amBtnClass } = this.state
    //     if(welcomeClasses === 'shown' && amBtnClass === ''){
    //         this.setState({
    //             amBtnClass: 'comeDown'
    //         })
    //     }
    // }
    
    render(){
        return(
            <div className="welcome-comp">
                <section className="welcome-head">
                    <h1 ><span className="pink-pinetree">Pinetree</span> Boutique Apartments</h1>
                    <p >We Create Memories That Last Forever.</p>
                    <LargeBtn styleClass="experience-btn">EXPERIENCE PINETREE</LargeBtn>
                </section>
                <div className={`upper-right`}>
                    <p>Switch to</p>
                    <button className="lang-btn">AM</button>
                </div>
                <div className="scroll-tag">

                    <p>Scroll</p>
                    <p id="arrow">↓</p>
                </div>
            </div>
        )
    }
}