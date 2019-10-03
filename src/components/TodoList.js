import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { NONAME } from 'dns'

export default class TodoList extends Component {
    render(){
        const{items,clearList,handleDelete,handleEdit,doneItems,handleDone,edit}=this.props
        return (
            (items.length>0) && (<ul className="list-group my-5">
            {/* <h3 className="text-capitalize text-center todoHeader">todo list</h3> */}
           {items.map((item)=>{

               return (<TodoItem 
                key={item.id} 
                id={item.id}
                title={item.title}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleDone={handleDone}
                done={item.done}
                edit={edit}
                />);

               })}
           <button  type="button"
              className="btn btn-danger
              btn-block text-capitalize mt-5"
              id="clearbutton"
              onClick={clearList}
             >Clear list</button>
        </ul>)
            
        )
    }
}
