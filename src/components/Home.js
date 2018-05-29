import React, {Component} from 'react';
import Restaurant from './Restaurant/Restaurant';

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
    return(
        <div>
            <Restaurant/>
        </div>
    )
    }
}

export default Home;

