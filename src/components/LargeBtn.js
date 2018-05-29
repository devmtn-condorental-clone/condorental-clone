import React from 'react'

export default function LargeBtn(props){
    return(
        <button className={`large-btn ${props.styleClass}`}>{props.children}</button>
    )
}