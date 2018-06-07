import React, { Component } from 'react'
import axios from 'axios'
import '../style/condoForm.css'
import { connect } from 'react-redux'
import { sendCondoChanges, createCondo } from '../ducks/reducer'
import { TextField } from '@material-ui/core';

class CondoForm extends Component{
    constructor(props){
        super(props)
        
        this.state={
            file: '',
            filename: '',
            filetype: '',
            id: props.id || 0,
            condoName: props.name || '',
            condoPrice: props.price || 0,
            condoCurrency: props.currency || 'EUR',
            condoImg: props.img || ''
        }
        this.handlePhoto=this.handlePhoto.bind(this)
        this.sendPhoto=this.sendPhoto.bind(this)
        this.toggleAddingCondo = this.toggleAddingCondo.bind(this)
        this.sendChanges = this.sendChanges.bind(this)
        this.addNewCondo = this.addNewCondo.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.condoImg !== this.props.condoImg){
            this.setState({
                condoImg: this.props.condoImg
            })
        }
    }

    toggleAddingCondo(){
        this.setState({ addingCondo: !this.state.addingCondo })
    }
    
    handlePhoto(event){
        const reader = new FileReader()
            , file = event.target.files[0]
        
        reader.onload = photo => {
            this.setState({
                file: photo.target.result,
                filename: file.name,
                filetype: file.type
            })
        }
        reader.readAsDataURL(file)
    }

    sendPhoto(event){
        event.preventDefault()
        axios.post({ photo: this.state })
        this.setState({
            file: '',
            filename: '',
            filetype: ''
        })
    }

    addNewCondo(){
        const { condoName, condoPrice, condoCurrency, condoImg } = this.state
        this.props.createCondo(condoName, condoPrice, condoCurrency, condoImg)
    }
    sendChanges(){
        const { id, condoName, condoPrice, condoCurrency, condoImg } = this.state
        this.props.sendCondoChanges(id, condoName, condoPrice, condoCurrency, condoImg)
    }

    render() {
        return(
            <secion className="condo-form-comp">
                <TextField type="text" value={this.state.condoName}/>
                <TextField type="text" value={this.state.condoPrice}/>

                <TextField type="text" value={this.state.condoCurrency}/>
                <p className="img-question">Have a link? Enter below:</p>
                <TextField type="text" value={this.state.condoImg}/>
                <p className="upload-img-direction">Or upload an image from your computer.</p>
                <input onChange={this.handlePhoto} type="file" />   
                {
                    this.state.file &&
                    <img src={this.state.file} alt="preview" className="file-preview"/>  
                }
                <button onClick={this.props.editing ? this.sendChanges : this.addNewCondo} className="save">Save</button>
            </secion>
        )
    }
}
function mapStateToProps(state){
    return {
        condoImg: state.condoImg
    }
}

export default connect(mapStateToProps, { sendCondoChanges, createCondo })(CondoForm)