import React, {Component} from 'react';
import '../style/island.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Island extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        AOS.init();
    }

    componentDidUpdate(){
        AOS.refresh();
    }

    render(){
        return(
            <section className='Island_container'>
                <div className='island_heading'>
                    <h3>Explore the Island</h3>
                </div>
                <div className='island_news'>
                    <div className='island_tips' data-aos='fade-up' data-aos-once='true'>
                        <h4> Five tips for a more relaxing vaction </h4>
                        <p> Discover a secret place. Mljet island, or as some call it nature’s masterpiece, is like an untouched pearl. You don’t need to go far from the resort to find the quiet places. It could be the beach, the pine trees forest or simply the nearest hill, from where you can...</p>
                        <p> Read more </p>
                    </div>
                    <div className='island_food' data-aos='fade-up' data-aos-delay='200' data-aos-once='true'>
                        <h4> Delicious homemade food in ante's place restaurant </h4>
                        <p> Home grown food, creative dishes, fresh breakfast, intimate dining and a fine selection of wines, breathtaking sea view and more... </p>
                        <p> Read more </p>
                    </div>
                    <div className='island_things' data-aos='fade-up' data-aos-delay='400' data-aos-once='true'>
                        <h4> Things to do on island mijet </h4>
                        <p> If you are looking for vacation full of things to do then Island Mljet is sure the place to be. With its amazing nature and national park Mljet offers all the thing you have been hoping to find at your well deserved holiday. If you a are into water sports, ...</p>
                        <p> Read more </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Island;