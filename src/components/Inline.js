import React, { Component } from 'react'

const heading={
    fontSize:'72px',
    color:'blue'
}
class Inline extends Component {
    render() {
        return (
            <div>
              <h1 style={heading}>Inline</h1>  
            </div>
        )
    }
}

export default Inline
