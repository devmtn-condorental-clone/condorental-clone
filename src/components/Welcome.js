import React, { Component } from 'react'
import LargeBtn from './LargeBtn'
// import { AccountCircle } from '@material-ui/icons'
import { getUser, translate, updateYOffset } from '../ducks/reducer'
import { connect } from 'react-redux'

class Welcome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            topOffset: props.yOffset > 240 ? 20 : props.yOffset > 100 ? props.yOffset/12 : 0
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.getUser()
    }

    handleScroll(){
        this.props.updateYOffset(window.pageYOffset)
    }

    componentDidUpdate(prevProps){
        const { yOffset } = this.props
        if(prevProps.yOffset !== yOffset){
            let difference = yOffset > 240 ? 20 : yOffset > 100 ? yOffset/12 : 0
            this.setState({
                topOffset: difference
            })
        }
    }


    render(){
        window.onscroll = this.handleScroll
        const { language } = this.props
        let scrollTop = window.innerWidth < 900 ? '74vh' : '85.5vh'
        return(
            <div className="welcome-comp">
                    {/* <AccountCircle className='login'/> 
                    <span className='login_text'> Login </span>
                </a> */}
                    <section className="welcome-head">
                        <h1 ><span className="pink-pinetree">Pinetree</span> {language === 'Foreign' ? 'Boutique Apartments' : 'Bougie Condos'}</h1>
                        <p >We Create Memories That Last Forever.</p>
                        <a  href={process.env.REACT_APP_LOGIN}>
                            <LargeBtn styleClass="experience-btn">EXPERIENCE PINETREE</LargeBtn>
                        </a>
                    </section>
                    <div className="upper-right">
                        <p>Switch to</p>
                        <button onClick={() => this.props.translate(language)} className="lang-btn">{language === 'Foreign' ? 'AM' : 'EU'}</button>
                    </div>
                    <div style={{opacity: `${1 - (this.state.topOffset/70)}`, top: `calc(${scrollTop} + ${Math.floor(this.state.topOffset)}px)`}} className="scroll-tag">
                        <p>Scroll</p>
                        <p id="arrow">↓</p>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
        language: state.language,
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps, { getUser, translate, updateYOffset }) (Welcome);