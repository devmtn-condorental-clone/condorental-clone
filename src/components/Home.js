import React, {Component} from 'react';
import Restaurant from './Restaurant/Restaurant';
import Welcome from './Welcome';
import Header from './Header';
import Booking from './Booking'
import Paradise from './Paradise';
import OurSuites from './OurSuites';
import Quote from './Quote';
import Island from './Island';
import Footer from './Footer';

class Home extends Component {
   constructor(){
       super()
       this.state = {

       }
   }


   render(){
   return(
       <div>
            <Header/>
            <section id="main-content">
                <Welcome/>
                <Booking />
                <Paradise />
                <OurSuites />
                <Restaurant/>
                <Quote/>
                <Island/>
                <Footer/>
            </section>
       </div>
   )
   }
}

export default Home;