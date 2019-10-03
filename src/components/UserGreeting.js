import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
return this.state.isLoggedIn && <div>Welcome Wasaga</div>
        // return(this.state.isLoggedIn?(
        //     <div>Welcome Wasaga</div>
        // ):(
        //     <div>WelcomeKijanaGeni</div>
        // )
            
        // ) 
// let message
// if(this.state.isLoggedIn){
//     message=<div>Welcome Opiyo</div>
// }else{
//     message=<div>WelcomeKijanaGeni</div>
// }          
// if(this.state.isLoggedIn){
//     return(
//         <div>Welcome Wasaga</div>
//     )
// }else{
//     return(
//         <div>Welcome Guest</div>
//     )    
// }
    }
}

export default UserGreeting
