import React from 'react';
import Popover from 'material-ui/Popover/Popover';
import { MenuItem } from 'material-ui/Menu';
import '../style/inquiryForm.css';
import '../style/inqpeople.css'



export default class PopoverExampleConfigurable extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      popOverOpen: false,
      inputTextInfant:', ',
      inputTextAdults: '',
      adultCount: 1,
      childCount:0,
      infantCount: 0,
      totalCount:1,
      error:'',
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
    this.handleAddAdult = this.handleAddAdult.bind(this)
    this.handleSubAdult = this.handleSubAdult.bind(this)
    this.handleAddChild = this.handleAddChild.bind(this)
    this.handleSubChild = this.handleSubChild.bind(this)
    this.handleAddPersonInf = this.handleAddPersonInf.bind(this)
    this.handleSubPersonInf = this.handleSubPersonInf.bind(this)
    this.saveRoomInf = this.saveRoomInf.bind(this)
  }

  saveRoomInf(){
    if(this.state.infantCount === 1){
      this.setState({
          inputTextInfant: '1 Infant'
      })
    
    }else if(this.state.infantCount === 2){
      this.setState({
        inputTextInfant: '2 Infants'
      })
    }
    else if(this.state.infantCount === 0){
      this.setState({
        inputTextInfant: ''
      })
    }
    this.setState({
      popOverOpen: false
    })
  }

  handleAddAdult(){
    if(this.state.adultCount < 4 && this.state.totalCount < 4){
      let adultCount = this.state.adultCount
      let totalCount = this.state.totalCount
      this.setState({
        adultCount: adultCount + 1,
        totalCount: totalCount + 1
      })
    }
  }


  handleSubAdult(){
    if(this.state.adultCount > 1 ){
      let adultCount = this.state.adultCount
      let totalCount = this.state.totalCount
      this.setState({
        adultCount: adultCount - 1,
        totalCount: totalCount - 1
      })
    }
  }

  handleAddChild(){
    if(this.state.totalCount < 4){
      let childCount = this.state.childCount
      let totalCount = this.state.totalCount
      this.setState({
        childCount: childCount + 1,
        totalCount: totalCount + 1
      })
    }
  }


  handleSubChild(){
    if(this.state.childCount >= 1){
      let childCount = this.state.childCount
      let totalCount = this.state.totalCount
      this.setState({
        childCount: childCount - 1,
        totalCount: totalCount - 1 
      })
    }
  }

  handleAddPersonInf(){
    if(this.state.infantCount <= 1){
      let currentInf = this.state.infantCount
      this.setState({
        infantCount: currentInf + 1
      })
    }
  }

  handleSubPersonInf(){
    if(this.state.infantCount >= 1){
      let currentCount = this.state.infantCount
      this.setState({
        infantCount:currentCount - 1,
      })
    }
    else{
      this.setState({
        error:''
      })
    }
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
      <div className="people-pop-input-text" disabled  onClick={()=>this.setState({
        popOverOpen:true
      })}> 
        <input value={`${this.state.totalCount} Guest ${this.state.inputTextInfant}`} className="inquiry-input-left"
          onClick={this.handleClick}
        />
        <Popover
          style={{
            width: '530px'
          }}
          autoWidth={true}
          open={this.state.popOverOpen}
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
                    <div onClick={this.handleSubAdult} className="pop-sub-control">-</div>
                    <div className="pop-num-control">{this.state.adultCount}</div>
                    <div onClick={this.handleAddAdult} className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-children-container">
                  <div>
                    <div className="pop-cat-title">Children</div>
                    <div className="pop-cat-title-sub">Ages 2 - 12</div>
                  </div>

                  <div className="pop-children-controller"> 
                    <div onClick={this.handleSubChild} className="pop-sub-control">-</div>
                    <div className="pop-num-control">{this.state.childCount}</div>
                    <div onClick={this.handleAddChild} className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-infant-container">
              
                <div>
                    <div className="pop-cat-title">Infants</div>
                    <div className="pop-cat-title-sub">Under 2</div>
                  </div>

                  <div className="pop-infant-controller">
                    <div onClick={this.handleSubPersonInf} className="pop-sub-control">-</div>
                    <div className="pop-num-control">{this.state.infantCount}</div>
                    <div onClick={this.handleAddPersonInf} className="pop-add-control">+</div>
                  </div>

                </div>

                <div className="pop-infant-text">
                Infants don't count toward the number of guest.
                </div>
               

            </section>

            <MenuItem>
              <div onClick={this.saveRoomInf} className="pop-apply-container">
                Apply
              </div>
            </MenuItem>

          </div>
        </Popover>
      </div>
    );
  }
}
