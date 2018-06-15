import React, { Component } from 'react'
import Draggable from 'react-draggable'
// import {DraggableCore} from 'react-draggable'

class VidVolumeControlBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            x: 100,
            newVal: 0,
            width: '100px',
            left: props.left
        }
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps, this.props)
        if(prevProps.primaryWidth !== this.props.primaryWidth){
            this.setState({width: this.props.primaryWidth})
            this.setState({left: this.props.left/1})
        }
        if(prevProps.muted !== this.props.muted){
            if(this.props.muted){
                this.setState({ x: 0, left: 0, width: '0px'})
            }else{
                this.setState({ x: this.props.volume, left: this.props.volume, width: `${this.props.volume}px` })
            }
        }
    }
    
    handleStart(e, x){
        e.preventDefault()
        console.log(x)
        // const { total, handleClick } = this.props
        // handleClick((x/1)/(total/1))
        this.setState({
            x,
            left: x
        })
    }
    
    handleDrag(e, data){
        e.preventDefault()
        console.log(data, (10 * ~~((100 + (data.x)) / 9)))
        // const { total, handleClick } = this.props
        // handleClick((x/1)/(total/1))
        this.setState({
            x: (10 * ~~((100 + (data.x)) / 9)),
            left: (10 * ~~((100 + (data.x)) / 9)),
            width: `${(10 * ~~((100 + (data.x)) / 9))}px`
        })
        
    }
    
    handleStop(e, x){
        e.preventDefault()
        console.log('stop', (10 * ~~((100 + (x)) / 9)))
        const { total, handleClick } = this.props
        handleClick((10 * ~~((100 + (x)) / 9)))
        this.setState({
            x: (10 * ~~((100 + (x)) / 9)),
            left: (10 * ~~((100 + (x)) / 9))
        })
    }
    
    render() {
    return(
        <section className={`control-bar video-volume`}>
            <div style={{width: this.state.width}} className={`primary-bar current-volume`} />
            <Draggable
                position={this.props.muted ? {x: -100, y: 0} : null }
                bounds="parent" axis="x" grid={[9, 0]}
                onStart={(e, data) => this.handleStart(e, data.x)}
                onStop={(e, data) =>this.handleStop(e, data.x)}
                onDrag={(e, data) =>this.handleDrag(e, data)} 
            >
                <div className="control-btn" />
            </Draggable>
                {/* <input type="range" className="control-range" /> */}
        </section>
    )
}
}
export default VidVolumeControlBar