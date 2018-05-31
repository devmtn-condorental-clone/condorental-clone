import React, {Component} from 'react';
import '../../style/restaurant.css';
import steak from '../../style/images/amazing_restaurant_steak.jpg';
import people from '../../style/images/amazing_restaurant_1.jpg';
import lunch from '../../style/images/amazing_restaurant_2.jpg';

class Restaurant extends Component {
   constructor(){
       super()
       this.state = {
           vidWidth: window.innerWidth - 80,
           vidHeight: (window.innerWidth -80) * (0.5625)
       }
       this.updateWidth = this.updateWidth.bind(this)
   }

   componentDidMount(){
       this.setState({
           vidWidth: window.innerWidth - 80,
           vidHeight: (window.innerWidth -80) * (0.5625)
       })
   }

   updateWidth(){
       // alert('WHAT ARE YOU DOINGGGG')
       this.setState({
           vidWidth: window.innerWidth -80,
           vidHeight: (window.innerWidth -80) * (0.5625)
       })
   }

   render(){
       window.onresize = this.updateWidth
   return(
       <section className="Restaurant_container">
           <section className='Restaurant'>
               <div className='amazing_container'>
                   {/* <div className='amazing_line'>
                   </div> */}
                       <h3 className='title_amazing'> Amazing Restaurant </h3>
                       <div className='text_amazing'>
                           <p>
                               Seeking out new flavours and creative cuisine is one of the best things about any <br/> holiday. Created from the great passion of the owner’s love of fresh and home <br/> grown food, the cuisine of Boutique Pine Tree combines traditional and <br/> contemporary dishes. We strive to provide a unique dining experience with <br/> exceptional service.
                           </p>
                           <p className='amazing_read_more'> Read more </p>
                       </div>
               </div>
               <img className='amazing_steak' src={steak} alt="steak"/>
               <img className='amazing_people' src={people} alt='people'/>
               <img className='amazing_lunch' src={lunch} alt='lunch'/>
               <div className='amazing_box_1'> </div>
               <div className='amazing_box_2'> </div>
               <section className='video_section'>
                   <iframe height={this.state.vidHeight} width={this.state.vidWidth} title="video" id="amazing_video" src="https://www.youtube.com/embed/KkrCYd_P4wA?controls=0&showinfo=0" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media" ></iframe>
               </section>
           </section>
       </section>
   )
   }
}

export default Restaurant;