import React, {Component} from 'react';
import Restaurant from './Restaurant/Restaurant';
import Welcome from './Welcome'

class Home extends Component {
   constructor(){
       super()
       this.state = {

       }
   }


   render(){
   return(
       <div>
           <Welcome/>
           <Restaurant/>
       </div>
   )
   }
}

export default Home;