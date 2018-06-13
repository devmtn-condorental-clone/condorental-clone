import React, { Component } from 'react'
import '../style/condoForm.css'
import { connect } from 'react-redux'
import { sendCondoChanges, createCondo, savePhoto } from '../ducks/reducer'
import TextField from 'material-ui/TextField'
import fns from '../utils/steve_functions'

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
    
    saveUpload(){
        const { file, filename, filetype } = this.state
        this.props.savePhoto({file, filename, filetype})
        this.setState({
            file: '',
            filename: '',
            filetype: ''
        })
    }


    warnUser(val){
        alert(`Invalid ${val} input. Please correct errors.`)
        return false
    }
    
    validateInput(val){
        switch(val){
            case 'length':
                return !fns.validateCurrencyLength(this.state.condoCurrency) ? this.warnUser('currency') : true
            case 'caps':
                return !fns.validateCurrencyCaps(this.state.condoCurrency) ? this.warnUser('currency') : true
            case 'imgUrl':
                return !fns.validateImgUrl(this.state.condoImg) ? this.warnUser('image url') : true
            case 'name':
                return !fns.validateNameLength(this.state.condoName) ? this.warnUser('name') : true
            default:
                return true
        }
    }
    
    addNewCondo(){
        const { condoName, condoPrice, condoCurrency, condoImg } = this.state
        if(!this.validateInput('length') || !this.validateInput('caps') || !this.validateInput('imgUrl') || !this.validateInput('name')){
            return
        }else{
            this.props.createCondo(condoName, condoPrice, condoCurrency, condoImg)
            this.setState({
                condoName: '',
                condoPrice: 0,
                condoCurrency: 'EUR',
                condoImg: ''
            })
        }
    }
    sendChanges(){
        const { id, condoName, condoPrice, condoCurrency, condoImg } = this.state
        if(!this.validateInput('length') || !this.validateInput('caps') || !this.validateInput('imgUrl') || !this.validateInput('name')){
            return
        }else{
            this.props.sendCondoChanges(id, condoName, condoPrice, condoCurrency, condoImg)
            this.props.toggleEdit(0)
        }
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

        const styles = {
            floatingLabelStyle: {
                color: '#30373f'
            },
            floatingLabelFocusStyle: {
                color: '#ab8c6b',
                fontWeight: 800
            }
        }

        return(
            <section style={this.props.adding ? {marginTop: "1rem"} : null} className="condo-form-comp">
                <div className="name--price-row form-row">
                    <TextField underlineShow={false} onChange={(e) => this.updateInput(e.target.value, 'name')} type="text" floatingLabelFixed value={this.state.condoName} className="name-field" floatingLabelText='Apartment' floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                    <TextField underlineShow={false} className="price-field" floatingLabelFixed onChange={(e) => this.updateInput(e.target.value, 'price')} type="number" value={this.state.condoPrice} floatingLabelText='Price' floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                </div>
                <div className="currency-imglink-row form-row">
                    <TextField underlineShow={false} className="img-field" floatingLabelFixed onChange={(e) => this.updateInput(e.target.value, 'img')} type="text" value={this.state.condoImg} floatingLabelText="Have an image URL?" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                    <TextField underlineShow={false} className="currency-field" floatingLabelFixed onChange={(e) => this.updateInput(e.target.value, 'currency')} type="text" value={this.state.condoCurrency} floatingLabelText='Currency' floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                </div>
                <div className="s3-img-upload-row">
                    <div className="form-right">
                        {
                            this.state.condoImg &&
                            <img src={this.state.condoImg} alt="link preview" className="link-preview"/>  
                        }
                    </div>
                    <div className="form-left">
                        {
                            !this.state.file
                            ?
                            <p className="upload-img-direction">Or upload an image.</p>
                            :
                            <button onClick={() => this.setState({file: '', filename: '', filetype: ''})} className="end-file-search">Clear File</button>
                        }
                        {
                            this.state.file &&
                            <img src={this.state.file} alt="preview" className="file-preview"/>  
                        }
                        <div className="file-btns">
                            <div className='input-file'>
                                <input onChange={this.handlePhoto} type="file"/>
                                <span className='input-span'> {this.state.file ? 'Choose Another' : 'Find File'} </span>  
                            </div>
                            {
                                this.state.file &&
                                <button onClick={this.saveUpload} className="use-photo">Save This Photo</button>
                            }
                        </div>
                    </div>    
                </div>
                <button disabled={this.state.file} onClick={this.props.editing ? this.sendChanges : this.addNewCondo} className={`save ${this.state.file && 'disabled'}`}>Save</button>
                <i className="material-icons hide-form" onClick={this.props.editing ? () => this.props.toggleEdit(0) : this.props.endCreation}>cancel</i>
            </section>
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