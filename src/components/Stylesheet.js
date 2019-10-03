import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let wasaga = props.opiyo?'primary':''
    let elisha = props.obado?'font':''
    return (
        <div>
        <h1 className={`${wasaga} ${elisha}`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
