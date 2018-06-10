import React, {Component} from 'react';
import '../../style/restaurant.css';
import steak from '../../style/images/amazing_restaurant_steak.jpg';
import people from '../../style/images/amazing_restaurant_1.jpg';
import lunch from '../../style/images/amazing_restaurant_2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YouTube from 'react-youtube';

class Restaurant extends Component {
   constructor(){
       super()
       this.state = {
           vidWidth: window.innerWidth - 114,
           vidHeight: (window.innerWidth -114) * (0.5625),
           stateEvent: {},
           video: false,
           background: true,
           videoText: true
       }
       this.updateWidth = this.updateWidth.bind(this)
   }

   componentDidMount(){
       this.setState({
           vidWidth: window.innerWidth - 114,
           vidHeight: (window.innerWidth -114) * (0.5625)
       })
       AOS.init();
   }

   componentDidUpdate(){
       AOS.refresh();
   }

   updateWidth(){
       // alert('WHAT ARE YOU DOINGGGG')
       this.setState({
           vidWidth: window.innerWidth -114,
           vidHeight: (window.innerWidth -114) * (0.5625)
       })
   }

   playVideo(){
       if(this.state.video){
           this.state.stateEvent.pauseVideo()
       }
       else{
           this.state.stateEvent.playVideo()
           this.setState({
               video: !this.state.video
           })
       }
       if(this.state.videoText){
           this.setState({
               videoText: !this.state.videoText
           })
       }
   }

   handleBackground(){
       this.setState({
           background: !this.state.background
       })
   }

   render(){
       const opts = {
           height: this.state.vidHeight,
           width: this.state.vidWidth,
           playerVars: {
            autoplay: 0
           }
       }

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
                   <div className='shadow_one' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
                   <div className='amazing_steak' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-delay='500' alt="steak" style={{backgroundImage: `url(${steak})`}} data-aos-once='true' />
               </div>
               <div className='amazing_img_two'>
                   <div className='shadow_two' data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'  />
                   <div className='amazing_people' alt='people' style={{backgroundImage: `url(${people})`}} data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'  data-aos-delay='500'/>
               </div>
               <div className='amazing_img_three'>
                   <div className='shadow_three' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
                   <div className='amazing_lunch' style={{backgroundImage: `url(${lunch})`}} alt='lunch' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
               </div>
               <div className='amazing_box_1'> </div>
               <div className='amazing_box_2'> </div>
               <section className='video_section' data-aos='fade-up' data-aos-once='true'>
                   { this.state.background && <div className='video_image' onClick={() => {this.playVideo(); this.handleBackground() }}> 
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" space="preserve" className='play_button'>
	                        <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M5,12V4l7,4L5,12z"/>
                        </svg>
                        { this.state.videoText && <div className='video_text'>
                            <h3> Ana Cooks - Ante's place </h3>
                            <p> This is how we cook on Mljet. Fresh and homemade.</p>
                        </div> }
                    </div> }
                   <YouTube
                        className='amazing_video'
                        videoId='KkrCYd_P4wA'
                        opts={opts}
                        onReady={ e => this.setState({
                            stateEvent: e.target
                        })}
                        onPause={ e => this.setState({
                            stateEvent: e.target
                        })}
                        />
               </section>
           </section>
       </section>
   )
   }
}

export default Restaurant;

