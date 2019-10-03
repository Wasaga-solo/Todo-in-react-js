import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
console.log('i have been clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>ClickMe</button>
            </div>
        )
    }
}

export default ClassClick
