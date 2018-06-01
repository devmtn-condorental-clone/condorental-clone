import React, {Component} from 'react';
import '../style/footer.css';
import LargeBtn from './LargeBtn';
import logo from '../style/images/menu-logo_2x.png';
import square from '../style/images/foot-travel-myth-badge_2x.png';

class Footer extends Component{

    render(){
        return(
            <section className='Footer_container'>
                <div className='footer_book'>
                    <div className='footer_title'>
                        <h4 className='title'> Ready to book your stay? </h4>
                        <LargeBtn styleClass='footer_button'> INQUIRY FORM </LargeBtn>
                    </div>
                </div>
                <div className='footer_pic'>
                    <div className='footer_logo'>
                        <img className='footer_pic_header' src={logo} alt='logo'/> 
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
                        
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 291.319 291.319" space="preserve" width="512px" height="512px" className="footer_icon_two">
                            <path className="fb-path1 active-path" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659   S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" data-original="#3B5998"  data-old_color="#c6ab8f"/>
                            <path d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055   v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366   C154.791,104.556,158.341,100.277,163.394,100.277z" data-original="#FFFFFF" className="fb-path2" data-old_color=" rgb(255, 255, 255)"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 291.319 291.319" space="preserve" width="512px" height="512px" class="footer_icon_three">
                            <path d="M145.659,0c80.44,0,145.66,65.219,145.66,145.66S226.1,291.319,145.66,291.319S0,226.1,0,145.66   S65.21,0,145.659,0z" data-original="#3F729B" className="ig-path1 active-path" data-old_color="#c6ab8f"/>
                            <path d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56   c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38   C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202   C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429   c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239z    M209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759   c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818   c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z" data-original="#FFFFFF" className="ig-path2" data-old_color=" rgb(255, 255, 255)"/>
                        </svg>
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

export default Footer;
