import React, { Component } from 'react'
import './myStyles.css'

export default class TodoItem extends Component {
    render() {
        const {title,handleDelete,id,handleEdit,done,handleDone,edit}=this.props
        return (
<li className="list-group-item text-capitalize d-flex
justify-content-between"id={ done ? "doneItem":"undoneItem"} onDoubleClick={() =>handleDone(id)}>
    <h6>{title}</h6>
    <div className="todo-icon">
        
        <span className="mx-2 text-primary pointercss" >
            <i className="fa fa-edit" onClick={() => handleEdit(id)}></i>
        </span>
        <span className="mx-2 text-danger pointercss">
            <i className="fa fa-trash"  onClick={() => handleDelete(id)}></i>
        </span>
    </div>
</li>
        )
    }
}
