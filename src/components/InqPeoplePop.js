import React from 'react';
import Popover from 'material-ui/Popover/Popover';
import { MenuItem } from 'material-ui/Menu';
import '../style/inquiryForm.css';
import '../style/inqpeople.css'


export default class PopoverExampleConfigurable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
    const { anchorOrigin } = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const { targetOrigin } = this.state;
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
        />

        <Popover
          style={{
            width: '530px'
          }}
          autoWidth={true}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <div style={{
            width: '530px'
          }}>
            <section className="inq-pop-container">

                <div className="pop-adults-container">
                <div>
                    <div className="pop-cat-title">Adults</div>
                    <div className="pop-cat-title-sub">At least 1</div>
                  </div>

                  <div className="pop-adults-controller">
                    <div className="pop-sub-control">-</div>
                    <div className="pop-num-control">1</div>
                    <div className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-children-container">
                  <div>
                    <div className="pop-cat-title">Children</div>
                    <div className="pop-cat-title-sub">Ages 2 - 12</div>
                  </div>

                  <div className="pop-children-controller"> 
                    <div className="pop-sub-control">-</div>
                    <div className="pop-num-control">1</div>
                    <div className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-infant-container">
              
                <div>
                    <div className="pop-cat-title">Infants</div>
                    <div className="pop-cat-title-sub">Under 2</div>
                  </div>

                  <div className="pop-infant-controller">
                    <div className="pop-sub-control">-</div>
                    <div className="pop-num-control">1</div>
                    <div className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-infant-text">
                Infants don't count toward the number of guest.
                </div>
               

            </section>

            <MenuItem>
              <div className="pop-apply-container">
                Apply
              </div>
            </MenuItem>

          </div>
        </Popover>
      </div>
    );
  }
}
