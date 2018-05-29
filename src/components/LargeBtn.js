import React from 'react'
import '../style/welcome.css'

function LargeBtn(props){
    return(
        <button className={`large-btn ${props.styleClass}`}>{props.children}</button>
    )
}
export default LargeBtn