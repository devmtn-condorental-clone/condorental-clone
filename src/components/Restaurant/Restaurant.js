import React, {Component} from 'react';
import '../../style/style.css';

class Restaurant extends Component {


    render(){
    return(
        <section className = 'Restaurant'>
            <div className = 'amazing_container'>
                <h3 className = 'title_amazing'> Amazing Restaurant </h3>
                <div className = 'text_amazing'>
                    <p>
                        Seeking out new flavours and creative cuisine is one of the best things about any holiday. Created from the great passion of the owner’s love of fresh and home grown food, the cuisine of Boutique Pine Tree combines traditional and contemporary dishes. We strive to provide a unique dining experience with exceptional service.
                    </p>
                    <p> Read more </p>
                </div>
            </div>
        </section>
    )
    }
}

export default Restaurant;