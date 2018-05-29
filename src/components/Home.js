import React, {Component} from 'react';
import Restaurant from './Restaurant/Restaurant';
import Welcome from './Welcome';
import Header from './Header';

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
                <Restaurant/>
            </section>
       </div>
   )
   }
}

export default Home;