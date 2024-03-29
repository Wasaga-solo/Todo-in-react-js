import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
const{item,handleChange,handleSubmit,editItem}=this.props
        return (
    <div className="card card-body my-3">               
<form onSubmit={handleSubmit}>
  <div className="input-group">
   <div className="input-group-prepend">
   <div className={editItem ? "input-group-text bg-success text-white"
   :"input-group-text bg-primary text-white"}>
       <i className="fa fa-book"></i>
    </div>    
    </div> 
    <input type="text"
     className="form-control text-capitalize"
     placeholder="add a todo item"
     value={item}
     onChange={handleChange}
    />  
   </div>
   <button type="submit" className={editItem ? "btn btn-block btn-success mt-3"
   :"btn btn-block btn-primary mt-3"}>
       {editItem ?"Save changes?" : "Add Item"}
       </button>  
</form>
            </div>
        )
    }
}
