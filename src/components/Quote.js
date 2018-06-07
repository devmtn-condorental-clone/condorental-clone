import React, {Component} from 'react';
import '../style/quote.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Quote extends Component{

    componentDidMount(){
        AOS.init();
    }

    componentDidUpdate(){
        AOS.refresh();
    }

    render(){
        return(
                <section className='quote_container' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
                    <div className='quote'>
                        <h2> Peaceful Paradise </h2>
                        <p> We loved everything here. It was beautiful, comfortable, and right next to the sea. There was an infinity pool on one side and a sand beach on the other. In the middle there was a restaurant with the best view ever. </p>
                        <h5 className='author'> Linda, England </h5>
                    </div>
                </section> 
        )
    }
}

export default Quote;