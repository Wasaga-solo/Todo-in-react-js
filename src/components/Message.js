import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message:'Welcome Visitor'
        }
    }
    Subscribe(){
        this.setState({
            Message:'Thank you for subscribing'
        }
        )
           
    }
    render(){
        return (<div>
            <h1>{this.state.Message}</h1>
        <button onClick={() => this.Subscribe()}>Subscribe</button>
        </div> )
    }
}
export default Message