import React from 'react'

function ControlBar(props){
    return(
        <section onClick={() => props.handleClick()} className={`control-bar ${props.mainClass}`}>
            <div onClick={() => props.handleClick()} style={{width: props.primaryWidth}} className={`primary-bar ${props.primaryClass}`} />
            <div onClick={() => props.handleClick()} style={{left: props.btnLeftAttr}} className="control-btn" />
            {
                props.disableSecondary
                ?
                null
                :
                <div style={{width: props.secondaryWidth}} className={`secondary-bar ${props.secondaryClass}`} />
            }
        </section>
    )
}
export default ControlBar