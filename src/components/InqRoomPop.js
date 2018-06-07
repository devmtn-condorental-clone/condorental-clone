import React from 'react';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import '../style/inquiryForm.css';



export default class PopoverExampleConfigurable extends React.Component {

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
          <Menu style={{
            width:'530px'
          }}>
            <MenuItem value={"Garden Secret"} primaryText="Garden Secret" />
            <MenuItem value={"Ortensia Love"} primaryText="Ortensia Love" />
            <MenuItem value={"Precious Moments"} primaryText="Precious Moments" />
            <MenuItem value={"Jasmin Lush"} primaryText="Jasmin Lush" />
            <MenuItem value={"Lavander Touch" } primaryText="Lavander Touch" />
            <MenuItem value={"Touch of Infinity"} primaryText="Touch of Infinity" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
