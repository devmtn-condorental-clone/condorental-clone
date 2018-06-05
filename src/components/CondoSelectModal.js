import React, { Component } from 'react'
import '../style/condoSelectModal.css'
import { connect } from 'react-redux'
import { toggleCondoModal, getCondos } from '../ducks/reducer'


class CondoSelectModal extends Component {
    
    componentDidMount(){
        this.props.getCondos()
    }

    render() {
        console.log(this.props.condos)
        const condosList = this.props.condos.map(v => {
            return(
                <div onClick={() => this.props.toggleCondoModal(this.props.condosModalOpen)} key={v.name} className="condo-container">
                    <img src={v.image} alt={v.name}/>
                    <div className="condo-content">
                        <h3>{v.name}</h3>
                        <p>from {v.price} <span> {v.currency} </span> </p>
                    </div>
                </div>
            )
        })
        return (
                <section style={this.props.condosModalOpen ? {display: 'flex'} : {display: 'none'}} className="condo-select-modal-comp">
                    <section className="condos-selection-container">
                        {condosList}
                    </section>
                </section>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        condos: state.condos,
        condosModalOpen: state.condosModalOpen,
    }
}

export default connect(mapStateToProps, { toggleCondoModal, getCondos })(CondoSelectModal)