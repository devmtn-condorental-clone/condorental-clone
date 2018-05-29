import React from 'react'

function LargeBtn(props){
    return(
        <button className={`large-btn ${props.styleClass}`}>{props.children}</button>
    )
}
export default LargeBtn