import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'Parent'
        }
        this.greetHandler = this.greetHandler.bind(this)
    }
    greetHandler(childName){
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
    render() {
        return (
            <div>
               <ChildComponent parentHandler ={ this.greetHandler}/> 
            </div>
        )
    }
}

export default ParentComponent
