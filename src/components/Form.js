import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             Comment:'',
             Select:'react'

        }

    }
    handleUsername=event=>{
        this.setState({
            Username:event.target.value
        })
    }
    handleComment=event=>{
        this.setState({
            Comment:event.target.value
        })
    }
    handleSelect=event=>{
        this.setState({
            Select:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.Username} ${this.state.Comment} ${this.state.Select}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type ={'text'} value={this.state.Username} onChange={this.handleUsername}></input>
                <br/>
                <label>Comment</label>
                <textarea type={'text'} value={this.state.Comment} onChange={this.handleComment}></textarea>
                <br/>
                <select value={this.state.Select} onChange={this.handleSelect}>
                    <option value={'react'}>React</option>
                    <option value={'node'}>Node</option>
                    <option value={'vue'}>Vue</option>
                </select>
                <br/>
                <button type={'submit'}>Submit</button>
            </form>
        )
    }
}

export default Form