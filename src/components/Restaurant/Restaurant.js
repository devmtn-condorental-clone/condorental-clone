import React, {Component} from 'react';
import '../../style/restaurant.css';
import steak from '../../style/images/amazing_restaurant_steak.jpg';
import people from '../../style/images/amazing_restaurant_1.jpg';
import lunch from '../../style/images/amazing_restaurant_2.jpg';
import video from '../../style/images/amazing_restaurant_vid_img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
       AOS.init({
           duration: 500
       });
   }

   componentDidUpdate(){
       AOS.refresh();
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
               <div className='amazing_container' data-aos='fade-up' data-aos-once='true'>
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
               <div className='amazing_img_one'>
                   <div className='shadow_one' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'/>
                   <div className='amazing_steak' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-delay='500' alt="steak" style={{backgroundImage: `url(${steak})`}} data-aos-once='true'/>
               </div>
               <div className='amazing_img_two'>
                   <div className='shadow_two' data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
                   <div className='amazing_people' alt='people' style={{backgroundImage: `url(${people})`}} data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' data-aos-delay='500'/>
               </div>
               <div className='amazing_img_three'>
                   <div className='shadow_three' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' />
                   <div className='amazing_lunch' style={{backgroundImage: `url(${lunch})`}} alt='lunch' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'/>
               </div>
               <div className='amazing_box_1'> </div>
               <div className='amazing_box_2'> </div>
               <section className='video_section'>
                   <div className='video_image'> 
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" space="preserve" className='play_button'>
	                        <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M5,12V4l7,4L5,12z"/>
                        </svg>
                   </div> 
                   <div className='video_text'>
                        <h3> Ana Cooks - Ante's place </h3>
                        <p> This is how we cook on Mljet. Fresh and homemade.</p>
                   </div>
                   <iframe height={this.state.vidHeight} width={this.state.vidWidth} title="video" id="amazing_video" src="https://www.youtube.com/embed/KkrCYd_P4wA?controls=0&showinfo=0" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media" data-aos='fade-in' data-aos-once='true'> </iframe> 
               </section>
           </section>
       </section>
   )
   }
}

export default Restaurant;
