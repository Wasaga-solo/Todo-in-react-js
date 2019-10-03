import React, { Component } from 'react'

class Counter extends Component {

   constructor(props){
       super(props)
       this.state={
           Count:0
       }
   }

Increment(){
    if(this.state.Count<20){
this.setState({
    Count:this.state.Count + 1
},()=>{
    console.log('Callback value',this.state.Count)
   }
)
    }else{
 this.setState({
     Count:this.state.Count - 19
     }
     )        
    }
   }
    render() {
        return (
            <div>
             <div>Count - {this.state.Count}</div> 
             <button onClick={()=>this.Increment()}>Increament</button>  
            </div>
        )
    }
}

export default Counter
