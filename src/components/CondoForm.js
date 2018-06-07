import React, { Component } from 'react'
import axios from 'axios'
import '../style/condoForm.css'
import { connect } from 'react-redux'
import { sendCondoChanges, createCondo, savePhoto } from '../ducks/reducer'
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
        this.handlePhoto = this.handlePhoto.bind(this)
        this.saveUpload = this.saveUpload.bind(this)
        this.toggleAddingCondo = this.toggleAddingCondo.bind(this)
        this.sendChanges = this.sendChanges.bind(this)
        this.addNewCondo = this.addNewCondo.bind(this)
        this.updateInput = this.updateInput.bind(this)
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

    // sendPhoto(event){
    //     event.preventDefault()
    //     axios.post({ photo: this.state })
    // }
    
    saveUpload(){
        const { file, filename, filetype } = this.state
        this.props.savePhoto({file, filename, filetype})
        this.setState({
            file: '',
            filename: '',
            filetype: ''
        })
    }

    addNewCondo(){
        const { condoName, condoPrice, condoCurrency, condoImg } = this.state
        this.props.createCondo(condoName, condoPrice, condoCurrency, condoImg)
        this.setState({
            condoName: '',
            condoPrice: 0,
            condoCurrency: 'EUR',
            condoImg: ''
        })
    }
    sendChanges(){
        const { id, condoName, condoPrice, condoCurrency, condoImg } = this.state
        this.props.sendCondoChanges(id, condoName, condoPrice, condoCurrency, condoImg)
        this.props.toggleEdit(0)
    }

    updateInput(val, tiger){
        switch(tiger){
            case 'name':
                this.setState({ condoName: val })
                break
            case 'price':
                this.setState({ condoPrice: val })
                break
            case 'currency':
                this.setState({ condoCurrency: val })
                break
            case 'img':
                this.setState({ condoImg: val })
                break
            default:
                return
        }
    }

    render() {
        return(
            <secion className="condo-form-comp">
                <div className="name--price-row form-row">
                    <TextField onChange={(e) => this.updateInput(e.target.value, 'name')} type="text" value={this.state.condoName}/>
                    <TextField onChange={(e) => this.updateInput(e.target.value, 'price')} type="number" value={this.state.condoPrice}/>
                </div>
                <div className="currency-imglink-row form-row">
                    <TextField onChange={(e) => this.updateInput(e.target.value, 'currency')} type="text" value={this.state.condoCurrency}/>
                    <TextField onChange={(e) => this.updateInput(e.target.value, 'img')} type="text" floatingText="Have a link? Enter here" value={this.state.condoImg}/>
                </div>
                <div className="s3-img-upload-row form-row">
                    <p className="upload-img-direction">Or upload an image from your computer.</p>
                    <input onChange={this.handlePhoto} type="file" />   
                </div>
                {
                    this.state.file &&
                    <img src={this.state.file} alt="preview" className="file-preview"/>  
                }
                {
                    this.state.condoImg &&
                    <img src={this.state.condoImg} alt="link preview" className="link-preview"/>  
                }
                {
                    this.state.file &&
                    <button onClick={this.saveUpload} className="use-photo">Save This Photo</button>
                }
                <button onClick={this.props.editing ? this.sendChanges : this.addNewCondo} className="save">Save</button>
                <button onClick={this.props.editing ? () => this.props.toggleEdit(0) : this.props.endCreation}>Hide Form</button>
            </secion>
        )
    }
}
function mapStateToProps(state){
    return {
        condoImg: state.condoImg,
        waiting: state.waiting
    }
}

export default connect(mapStateToProps, { sendCondoChanges, createCondo, savePhoto })(CondoForm)