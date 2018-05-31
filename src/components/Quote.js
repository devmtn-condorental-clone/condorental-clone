import React, {Component} from 'react';
import '../style/quote.css';

class Quote extends Component{

    render(){
        return(
                <section className='quote_container'>
                    <div className='quote'>
                        <h2> Peaceful Paradise </h2>
                        <p> We loved everything here. It was beautiful, comfortable, and right next to the sea. There was an infinity pool on one <br/> side and a sand beach on the other. In the middle there was a restaurant with the best view ever. </p>
                        <h5 className='author'> Linda, England </h5>
                    </div>
                </section> 
        )
    }
}

export default Quote;