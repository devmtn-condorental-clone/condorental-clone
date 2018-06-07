import React, { Component } from 'react'
import '../style/condoSelectModal.css'
import { connect } from 'react-redux'
import { toggleCondoModal, getCondos } from '../ducks/reducer'
import AddCondo from '@material-ui/icons/Add'
import EditCondo from '@material-ui/icons/Edit'
import DeleteCondo from '@material-ui/icons/Delete'
import CondoForm from './CondoForm';
import Close from '@material-ui/icons/Close'

class CondoSelectModal extends Component {
    constructor(){
        super()
        
        this.state={
            addingCondo: false,
            condoEditing: 0,
        }
        this.toggleAddingCondo = this.toggleAddingCondo.bind(this)
        this.prepareToEdit = this.prepareToEdit.bind(this)
    }

    componentDidMount(){
        this.props.getCondos()
    }

    toggleAddingCondo(){
        this.setState({ addingCondo: !this.state.addingCondo })
    }
    prepareToEdit(id){
        this.setState({
            condoEditing: id
        })
    }


    render() {
        console.log(this.props.condos)
        const condosList = this.props.condos.map(v => {
            return(
                <section onClick={this.props.user.is_admin ? null : () => this.props.toggleCondoModal(this.props.condosModalOpen)} key={v.name} className="condo-container">
                    <img src={v.image} alt={v.name}/>
                    <div className="condo-content">
                        <h3>{v.name}</h3>
                        <p>from {v.price} <span> {v.currency} </span> </p>
                        {
                            this.props.user.is_admin
                            ?
                            <section className="admin-buttons">
                                <button onClick={() => this.prepareToEdit(v.id)} className="edit-condo-btn">
                                    <EditCondo />
                                </button>
                                <button onClick={() => this.checkDelete(v.name, v.id)} className="delete-condo-btn">
                                    <DeleteCondo />
                                </button>
                            </section>
                            :
                            null
                        }
                        {
                            this.state.condoEditing === v.id
                            ?
                            <CondoForm name={v.name} price={v.price} img={v.image} currency={v.currency} id={v.id} editing />
                            // <section className="condo-edit-form">
                            //     <input type="text" value={this.state.condoName}/>
                            //     <input type="text" value={this.state.condoPrice}/>
                            //     <input type="text" value={this.state.condoCurrency}/>
                            //     <p className="img-question">Have a link? Enter below:</p>
                            //     <input type="text" value={this.state.condoImg}/>
                            //     <p className="upload-img-direction">Or upload an image from your computer.</p>
                            //     <input onChange={this.handlePhoto} type="file" />   
                            //         {
                            //             this.state.file &&
                            //             <img src={this.state.file} style={{margin: "0.25em", maxWidth: "400px"}} alt="preview" className="file-preview"/>  
                            //         }
                            // </section>
                            :
                            null
                        }
                    </div>
                </section>
            )
        })
        return (
                <section style={this.props.condosModalOpen ? {display: 'flex'} : {display: 'none'}} className="condo-select-modal-comp">
                    <section className="condos-selection-container">
                        {
                            this.props.user.is_admin
                            ?
                            <button onClick={() => this.props.toggleCondoModal(this.props.condosModalOpen)} className="close"><Close /></button>
                            : 
                            null
                        }
                        {condosList}
                        {
                            this.props.user.is_admin
                            ?
                                this.state.addingCondo
                                ?
                                <CondoForm adding />
                                // <section className="add-condo-form">
                                //     <input onChange={this.handlePhoto} type="file" />   
                                //     {
                                //         this.state.file &&
                                //         <img src={this.state.file} style={{margin: "0.25em", maxWidth: "400px"}} alt="preview" className="file-preview"/>  
                                //     }
                                // </section>
                                :
                                <button onClick={this.toggleAddingCondo} className="add-condo-btn">
                                    <AddCondo />
                                </button>
                            :
                            null
                        }
                    </section>
                </section>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        condos: state.condos,
        condosModalOpen: state.condosModalOpen,
        user: state.user
    }
}

export default connect(mapStateToProps, { toggleCondoModal, getCondos })(CondoSelectModal)