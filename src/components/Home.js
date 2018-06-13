import React, { Component } from 'react';
import Restaurant from './Restaurant';
import Welcome from './Welcome';
import Header from './Header';
import Booking from './Booking'
import CondoSelectModal from './CondoSelectModal'

import Paradise from './Paradise';
import OurSuites from './OurSuites';
import Quote from './Quote';
import Island from './Island';
import Footer from './Footer';
import HeaderModal from '../components/HeaderModal';
import LoadingPage from '../components/LoadingPage';
import InquiryForm from '../components/InquiryForm';





class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }



   render(){
   return(
       <div>
           <LoadingPage/>
            <Header/>
            <HeaderModal/>
            <InquiryForm/>
            <section id="main-content">

                <CondoSelectModal />

                {/* <section className="parallax_1"> */}
                    <Welcome/>
                    <Booking />
                    <Paradise />
                {/* </section> */}
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