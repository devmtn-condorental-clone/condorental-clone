import React, { Component } from 'react'
import Draggable from 'react-draggable'
// import {DraggableCore} from 'react-draggable'

class ControlBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            width: props.primaryWidth,
            left: props.left,
            y: -1
        }
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps, this.props)
        if(prevProps.primaryWidth !== this.props.primaryWidth){
            this.setState({width: this.props.primaryWidth})
            this.setState({x: this.props.left/1})
        }
    }
    
    handleStart(e, data){
        e.preventDefault()
        const { total, handleClick, pause } = this.props
        console.log('START: ', pause, data.x, data.y)
        pause()
        // handleClick((data.x/1)/(total/1))
        this.setState({
            x: data.x,
            left: this.props.left/1,
            y: data.y
        })
    }
    
    handleDrag(e, data){
        e.preventDefault()
        console.log(data.x, data.y)
        // const { total, handleClick } = this.props
        // handleClick((data.x/1)/(total/1))
        this.setState({
            x: data.x,
            left: this.props.left/1
        })
        
    }
    
    handleStop(e, data){
        e.preventDefault()
        console.log(data.x, data.y)
        // const { total, handleClick } = this.props
        // handleClick((data.x/1)/(total/1))
        this.setState({
            x: data.x,
            left: data.x,
            y: data.y
        })
    }
    
    render() {
    return(
        <section
            className={`control-bar ${this.props.mainClass}`}
        >
            <div style={{width: `${this.state.width}`}} className={`primary-bar ${this.props.primaryClass}`} />
            <Draggable
                position={{x: this.state.x, y: 0}}
                bounds="parent" axis="x" grid={[this.props.step]}
                onStart={(e, data) =>this.handleStart(e, data)}
                onStop={(e, data) =>this.handleStop(e, data)}
                onDrag={(e, data) =>this.handleDrag(e, data)} 
            >
                <div className="control-btn" />
            </Draggable>
            <div style={{width: this.props.secondaryWidth}} className={`secondary-bar ${this.props.secondaryClass}`} />
        </section>
    )
}
}
export default ControlBar