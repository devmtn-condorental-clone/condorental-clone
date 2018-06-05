import React, { Component } from 'react'
import '../style/condoSelectModal.css'
import { connect } from 'react-redux'
import { toggleCondoModal } from '../ducks/reducer'

class CondoSelectModal extends Component {
    // constructor(){
    //     super()
    //     this.state = {
            
    //     }
    // }
    render() {
        const apartments = this.props.apartments.map(v => {
            return(
                <div onClick={() => this.props.toggleCondoModal(this.props.condosModalOpen)} key={v.name} className="condo-container">
                    <img src={v.img} alt={v.name}/>
                    <div className="condo-content">
                        <h3>{v.name}</h3>
                        <p>from {v.price} EUR</p>
                    </div>
                </div>
            )
        })
        return (
                <section style={this.props.condosModalOpen ? {display: 'flex'} : {display: 'none'}} className="condo-select-modal-comp">
                    <section className="condos-selection-container">
                        {apartments}
                    </section>
                </section>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        apartments: state.apartments,
        condosModalOpen: state.condosModalOpen
    }
}

export default connect(mapStateToProps, { toggleCondoModal })(CondoSelectModal)