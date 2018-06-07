import React from 'react'
import '../style/welcome.css'

function LargeBtn(props){
    return(
        <button onClick={() => props.handleClick(props.arg1)} className={`large-btn ${props.styleClass}`}>{props.children}</button>
    )
}
export default LargeBtn