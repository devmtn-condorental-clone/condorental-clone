import React from 'react';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import '../style/inquiryForm.css';
import { connect } from 'react-redux';
import { getCondos } from '../ducks/reducer';
import { selectCondo } from '../ducks/reducer'



class InqRoomPop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value:'',
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
        
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  componentWillMount(){
    this.props.getCondos()
  }

  
  handleSelectedCondo(name,id){
    this.props.selectCondo(name,id)
  }
  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  render() {
   const condoList = this.props.condos.map((element, index)=>{
     return(
      <Menu style={{width:'530px'}}>
      <MenuItem onClick={()=>{this.handleSelectedCondo(element.name,element.id)}} key={index} value={`${element.name}`} primaryText={`${element.name}`} /></Menu>
     )
   })
   
   return (
      <div>
        <input className="inquiry-input-left"
          onClick={this.handleClick}
          label="Click me"
          value={this.state.value}
        />
        
        <Popover
          style={{
            width:'530px'
          }}
          autoWidth={true}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
          
        >
        {condoList}
        </Popover>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    condos: state.condos,
    selectedCondo: state.condoSelected
  }
}
export default connect(mapStateToProps,{selectCondo, getCondos})(InqRoomPop)