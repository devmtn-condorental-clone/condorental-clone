import React, { Component } from 'react'
import '../style/condoSelectModal.css'
import { connect } from 'react-redux'
import { toggleCondoModal, getCondos, selectCondo, deleteCondo } from '../ducks/reducer'
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
            condoInQuestion: '',
            condoToDeleteID: 0,
            closed: false
        }
        this.toggleAddingCondo = this.toggleAddingCondo.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.chooseCondo = this.chooseCondo.bind(this)
        this.checkDelete = this.checkDelete.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this)
    }

    componentDidMount(){
        this.props.getCondos()
    }

    toggleAddingCondo(){
        this.setState({ addingCondo: !this.state.addingCondo })
    }
    toggleEdit(id){
        this.setState({
            condoEditing: id
        })
    }
    
    chooseCondo(name, id){
        this.props.selectCondo(name, id)
        this.closeModal()
    }

    checkDelete(name, id){
        console.log(id)
        this.setState({
            condoInQuestion: name,
            condoToDeleteID: id
        })
    }

    confirmDelete(bool){
        console.log(this.state.condoToDeleteID)
        if(bool){
            this.props.deleteCondo(this.state.condoToDeleteID)
        }
        this.setState({
            condoInQuestion: '',
            condoToDeleteID: 0
        })
    }

    closeModal(){
        this.setState({ closed: true })
        setTimeout(() => {
            this.setState({ closed: false })
            this.props.toggleCondoModal(this.props.condosModalOpen)
        }, 1000)
    }

    render() {
        const { condoSelected } = this.props
        console.log(this.props.condos)
        let modalClass = `condo-select-modal-comp ${this.props.condosModalOpen ? 'open' : ''}${this.state.closed ? ' closed' : ''}`
        const condosList = this.props.condos.map(v => {
            return(
                <section key={v.name} className="condo-wrapper">
                    <section onClick={this.props.user.is_admin ? null : () => this.chooseCondo(v.name, v.id)}  className="condo-container">
                        <img src={v.image} alt={v.name}/>
                        <div className="condo-content">
                            <h3>{v.name}</h3>
                            <p>from {v.price} <span> {v.currency} </span> </p>
                            {
                                this.props.user.is_admin
                                ?
                                <section className="admin-buttons">
                                    <button onClick={() => this.toggleEdit(v.id)} className="edit-condo-btn">
                                        <EditCondo />
                                    </button>
                                    <button onClick={() => this.checkDelete(v.name, v.id)} className="delete-condo-btn">
                                        <DeleteCondo />
                                    </button>
                                </section>
                                :
                                null
                            }
                        </div>
                    </section>
                    {
                        this.state.condoEditing === v.id
                        ?
                        <CondoForm name={v.name} price={v.price} img={v.image} currency={v.currency} id={v.id} editing toggleEdit={this.toggleEdit}/>
                        :
                        null
                    }
                </section>
            )
        })
        return (
                <section onClick={() => this.chooseCondo(condoSelected.name, condoSelected.id)} className={modalClass}>
                    <section onClick={(e) => e.stopPropagation()} className="condos-selection-container">
                        {
                            this.props.user.is_admin
                            ?
                            <button onClick={() => this.closeModal()} className="close"><Close /></button>
                            : 
                            null
                        }
                        {condosList}
                        {
                            this.props.user.is_admin
                            ?
                                this.state.addingCondo
                                ?
                                <CondoForm endCreation={this.toggleAddingCondo} adding />
                                :
                                <button onClick={this.toggleAddingCondo} className="add-condo-btn">
                                    <AddCondo />
                                </button>
                            :
                            null
                        }
                    </section>
                    {
                        this.state.condoToDeleteID > 0
                        ?
                        <section className="are-you-sure-modal">
                            <div className="background-cover"/>
                            <div className="delete-content-wrapper">
                                <p>Are you sure you wish to delete {this.state.condoInQuestion}?</p>
                                <button onClick={() => this.confirmDelete(true)} className="yes">Yes</button>
                                <button onClick={() => this.confirmDelete(false)} className="no">No</button>
                            </div>
                        </section>
                        :
                        null
                    }
                </section>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        condos: state.condos,
        condosModalOpen: state.condosModalOpen,
        user: state.user,
        condoSelected: state.condoSelected
    }
}

export default connect(mapStateToProps, { toggleCondoModal, getCondos, selectCondo, deleteCondo })(CondoSelectModal)