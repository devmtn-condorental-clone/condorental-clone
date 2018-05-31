import React, {Component} from 'react';
import '../style/footer.css';

class Footer extends Component{

    render(){
        return(
            <section className='Footer_container'>
                <div className='footer_book'>
                    <div className='footer_title'>
                        <h4> Ready to book your stay </h4>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;