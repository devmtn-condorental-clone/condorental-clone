import React, { Component } from 'react'
import LargeBtn from './LargeBtn'
import {AccountCircle} from '@material-ui/icons'
import {getUser} from '../ducks/reducer'
import {connect} from 'react-redux'

class Welcome extends Component{

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        return(
            <div className="welcome-comp">
                <a  href={process.env.REACT_APP_LOGIN}>
                    <AccountCircle className='login'/> 
                    <span className='login_text'> Login </span>
                </a>
                    <section className="welcome-head">
                        <h1 ><span className="pink-pinetree">Pinetree</span> Boutique Apartments</h1>
                        <p >We Create Memories That Last Forever.</p>
                        <LargeBtn styleClass="experience-btn">EXPERIENCE PINETREE</LargeBtn>
                    </section>
                    <div className="upper-right">
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

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser}) (Welcome);