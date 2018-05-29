import React, {Component} from 'react';
import '../../style/restaurant.css';
import steak from '../../style/images/amazing_restaurant_steak.jpg'

class Restaurant extends Component {


    render(){
    return(
        <section className = 'Restaurant'>
            <div className = 'amazing_container'>
                <div className = 'amazing_line'>
                </div>
                    <h3 className = 'title_amazing'> Amazing Restaurant </h3>
                    <div className = 'text_amazing'>
                        <p>
                            Seeking out new flavours and creative cuisine is one of the best things about any <br/> holiday. Created from the great passion of the owner’s love of fresh and home <br/> grown food, the cuisine of Boutique Pine Tree combines traditional and <br/> contemporary dishes. We strive to provide a unique dining experience with <br/> exceptional service.
                        </p>
                        <p className = 'amazing_read_more'> Read more </p>
                    </div>
            </div>
            <span> <img className = 'amazing_steak' src={steak} alt="steak"/> </span> 
        </section>
    )
    }
}

export default Restaurant;