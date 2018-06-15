import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import '../style/headerModal.css';
import Logo from '../style/images/menu-logo_2x.png';
import SmallLogo from '../style/images/logo_2x.png';
import { openHeaderModal, closeHeaderModal } from '../ducks/reducer';
// import color from '@material-ui/core/colors/blueGrey';


class HeaderModal extends Component {
  

 

    render() {

      


        return (

            <div className="modal-container">

                {this.props.headerModalOpen ?
                    <div onClick={() => { this.props.closeHeaderModal() }} id="modalBtn" className="menu-button2">

                        {this.props.headerModalOpen ? 'CLOSE' : 'MENU'}
                        {/* <span className="close-x-animation"></span> */}
                        <div className="close-box-container">
                            <span onClick={() => { this.props.closeHeaderModal()}} class="close hairline"></span></div>
                    </div> :
                    <div onClick={() => { this.props.openHeaderModal() }} id="modalBtn" className="menu-button">

                        {this.props.headerModalOpen ? 'CLOSE' : 'MENU'}
                        <span className="ham-container">
                            <span className="hamburger"></span>
                        </span>
                    </div>

                }

                <div id="headerMenuModal" className={"menu-modal-" + (this.props.headerModalOpen ? 'open' : 'closed')}>

                    <div className="modal-content">
                        <div className="modal-top-header">

                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#f0e9e1'
                            }}><img alt="logo" style={{
                                height: '50px',
                                paddingLeft: '15px',
                                paddingTop: '10px'
                            }} src={SmallLogo} /></div>
                            <div style={{
                                color: 'white',
                                marginLeft: '74vw',
                                fontSize: '17px',
                                fontFamily: '"Open Sans", sans-serif',
                                fontWeight: '550',
                                cursor: 'pointer'
                            }} onClick={() => { this.props.closeHeaderModal() }}>COSE</div>

                            <div style={{
                                fontSize: '35px',
                                paddingLeft: '10px',
                                // fontFamily:'"Open Sans", sans-serif',
                                color: '#816f5e',
                                fontWeight: '-600',
                                cursor: 'pointer'
                            }} onClick={() => { this.props.closeHeaderModal() }}>X</div>

                        </div>

                        <div className="header-modal-text-container">
                            <div className="header-modal-logo-container"><img className="header-modal-menu-logo" src={Logo} alt="logo" /></div>
                            <div className="header-modal-content-container">

                                <div className="header-modal-column-1">
                                    <div className="modalFont-home">
                                        <a class="varient-1" href="" className="modalFont-home">Home</a></div>
                                    <div className="modalFont2"><a href="" className="modalFont2">Apartments</a></div>
                                    <div className="modalFont3"><a href="" className="modalFont3">Our Services</a></div>
                                </div>
                                <div className="header-modal-line"></div>
                                <div className="header-modal-column-2">
                                    <div className="modalFont1"><a href="" className="modalFont1">About</a></div>
                                    <div className="modalFont2"><a href="" className="modalFont2">Island attractions</a></div>
                                    <div className="modalFont3"><a href="" className="modalFont3">Blog</a></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        headerModalOpen: state.headerModalOpen
    }
}
export default connect(mapStateToProps, { openHeaderModal, closeHeaderModal })(HeaderModal)

