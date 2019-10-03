import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           <button onClick={()=>props.parentHandler('child')}>Click Me Bro</button> 
        </div>
    )
}

export default ChildComponent
