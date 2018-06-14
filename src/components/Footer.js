import React, {Component} from 'react';
import '../style/footer.css';
import LargeBtn from './LargeBtn';
import logo from '../style/images/menu-logo_2x.png';
import square from '../style/images/foot-travel-myth-badge_2x.png';
import TA from '../style/images/TA_Logo.svg';
import { connect } from 'react-redux';
import { openInfoModal } from '../ducks/reducer';
import {MailButton, FbButton, IgButton, TaButton} from '../style/images/footer_icons';


class Footer extends Component{
    constructor(){
        super()
        this.state = {
            taLogo: TA
        }
    }

    render(){
        return(
            <section className='Footer_container'>
                <div className='footer_book'>
                    <div className='footer_title'>
                        <h4 className='title'> Ready to book your stay? </h4>
                        <LargeBtn styleClass='footer_button' handleClick={() => this.props.openInfoModal()}> INQUIRY FORM </LargeBtn>
                    </div>
                </div>
                <div className='footer_pic'>
                    <div className='footer_logo'>
                        <a href='/'> <img className='footer_pic_header' src={logo} alt='logo' /* onClick={() => this.reloadPage()} *//> </a>
                    </div>
                    <div className='footer_text'>
                        <p> BOUTIQUE PINE TREE RESORT**** </p>
                        <p> LUXURY APARMENTS & RESTAURANT </p>
                        <p> Saplunara 17, Island Mljet, Croatia </p>
                        <p> boutiquepinetree@gmail.com </p>
                    </div>
                    <div className='footer_info'>
                        <p> INFO & RESERVATIONS: </p>
                        <p> +385 99 591 00 24 </p>
                    </div>
                    <div className='footer_social'>
                        <MailButton/> 
                        {/* {mailButton()} another way to display it */}
                        <FbButton/> 
                        <IgButton/> 
                        <TaButton/>
                    </div>
                </div>
                <div className='footer_credits'>
                    <div className='footer_bottom'>
                        <p> Copyright © 2016, BOUTIQUE PINE TREE RESORT**** </p>
                        <span className='bigger_square'> <img className='square' src={square} alt="square"/> </span>
                        <p> crafted by <span className='iconis'> ICONIS </span> </p>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return{
        openInfoModal: state.openInfoModal
    }
}

export default connect(mapStateToProps, {openInfoModal}) (Footer);

