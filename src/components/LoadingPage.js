import React from 'react';
import { Component } from 'react';
import '../style/loadingpage.css';
import Logo from '../style/images/logo_2x.png';




class LoadingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialLoad: true
        }


    }

    componentDidMount() {
        setTimeout( ()=>{
            this.setState({
                initialLoad: false
            })
        }, 1000)
    }

  

 
    render() {

        

        return (
            <div className={"loading-modal-"+ (this.state.initialLoad ? 'open' : 'closed')}>

                <div className="loading-logo-container">

                    <div className="loading-box"></div>

                    <img className="loading-logo" src={Logo} alt="Logo" />

                </div>







            </div>

        )
    }


}
export default LoadingPage