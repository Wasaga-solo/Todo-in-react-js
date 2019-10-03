import React, { Component } from 'react'

 class TodoList1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserInput:'',
             List:[
               
             ],   
             Done:[]
        }
    }
changeUserInput(input){
    this.setState({
        UserInput:input
    })
}
addActivity(input){
    let listArray=this.state.List;
    listArray.push(input);
    
    this.setState({
        List: listArray,
        UserInput: ''
    })

}
doneActivity(input){
    let TodoArray=this.state.List;
    let completeArray=this.state.List;
    TodoArray.filter((Todo)=>{
return(
    Todo!==input
)
    }
    )
    completeArray.push(input);
    
    this.setState({
        List: TodoArray,
        Done:completeArray
    })

}
    
    render() {
        return (
            <div>
<input type={'text'} value={this.state.UserInput} onChange={(e)=>this.changeUserInput(e.target.value)} placeholder={'Add an activity'}/>
<button onClick={()=>this.addActivity(this.state.UserInput)}>Add</button>
<ul>
    {this.state.List.map((val)=><li>{val}<button onClick={()=>this.doneActivity(this.state.UserInput)}>Done</button></li>)}
</ul>
<ul>
    {this.state.Done.map((val)=><li>{val}</li>)}
    </ul>  
            </div>
        )
    }
}

export default TodoList1
