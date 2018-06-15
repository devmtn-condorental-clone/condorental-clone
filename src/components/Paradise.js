import React, { Component } from 'react'
import '../style/paradise.css'
import leftimg from '../style/images/paradise_left.jpg'
import centerImg from '../style/images/paradise_center.jpg'
import parSteak from '../style/images/paradise_steak.jpg'
import bgImg from '../style/images/paradise_background_p.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { connect } from 'react-redux'

class Paradise extends Component{
    constructor(props){
        super(props)
        this.state = {
            shadowTrans: 0,
            leftImgTrans: 0,
            rightImgTrans: 0
        }
    }
    componentDidMount(){
        AOS.init()
    }

    componentDidUpdate(prevProps){
        const { yOffset } = this.props
        if(prevProps.yOffset !== yOffset){
            let shadow = yOffset < 770 ? 0 : (yOffset > 770 & yOffset < 1770) ? Math.ceil((770 - yOffset)/15) : -87
            let leftImg = yOffset < 770 ? 0 : (yOffset > 770 & yOffset < 1770) ? Math.ceil((yOffset - 770)/10) : 100
            let rightImg = yOffset < 770 ? 0 : (yOffset > 770 & yOffset < 1770) ? Math.ceil((770 - yOffset)/100) : -10
            this.setState({
                shadowTrans: shadow,
                leftImgTrans: leftImg,
                rightImgTrans: rightImg
            })
        }
        AOS.refresh()
    }
    render() {
        let medium = window.innerWidth < 900 ? true : false
        return(
            // <section className="parallax_paradise_cont">
                <section className="paradise-comp">
                    <div className="pool-img-box">
                        <div data-aos-anchor={medium ? ".paradise-comp" : ".paradise-content"} data-aos-anchor-placement="top-center" data-aos="poolShadowSlide" className="pool-shadow" data-aos-once='true'/>
                        <div data-aos-anchor={medium ? ".paradise-comp" : ".paradise-content"} data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos="poolImgSlide" data-aos-once='true' className="pool-img" style={{backgroundImage: `url(${leftimg})`}} alt="Pool View"/>
                    </div>
                    <div style={{transform: `translateY(${this.state.shadowTrans}px)`}} className="left-shadow shadow"/>
                    <div className="right-shadow shadow"/>
                    <div style={{transform: `translateY(${this.state.leftImgTrans}px)`}} className="building-box">
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos="buildingShadowSlide"  className="building-shadow" data-aos-once='true'/>
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos="buildingImgSlide" data-aos-once='true' className="building-img" style={{backgroundImage: `url(${centerImg})`}} alt="Building View From Water"/>
                    </div>
                    <div style={{transform: `translateY(${this.state.rightImgTrans}px)`}} className="steak-box">
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos="steakShadowSlide"  className="steak-shadow" data-aos-once='true'/>
                        <div data-aos-anchor=".paradise-content" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos="steakImgSlide" data-aos-once='true' className="steak-img" style={{backgroundImage: `url(${parSteak})`}} alt="Juicy Garnished Steak"/>
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

function mapStateToProps(state){
    return{
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps)(Paradise)