import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/Greet'
import { Component } from 'react';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import StyleSheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import styles from './components/myStyles.module.css'
// import Forms from './components/Form'
// import  TodoList1 from './components/TodoList1';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from 'uuid'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       id:uuid(),
       item:"",
       editItem:false,
       isEditing:false,
    }
  }
  handleChange=(e)=>{
   
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    
    if(this.state.item !==''){

  const newItem={
    id:this.state.id,
    title:this.state.item,
    done:false
  }
this.state.items.reverse()
const updatedItems=[...this.state.items,newItem]
updatedItems.reverse()
this.setState({
  items:updatedItems,
  item:'',
  id:uuid(),
  editItem:false,
  isEditing:false
})
}else{
  alert(`Enter an activity! An idle mind is the Devil's workshop.`)
}
//console.log(this.state.items)
  }
clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter((item)=>
    item.id !== id)

    this.setState({
      items:filteredItems
    })
  }
  handleEdit=(id)=>{
   
      if(this.state.isEditing ===true){
        alert("Please Save changes first")
  
        return 0;
      }

      else{
        this.setState({
          isEditing:true
          },()=>{
         
          })
      
      }
    

  
   

const filteredItems=this.state.items.filter((item)=>
    item.id !==id)
const editedItem=this.state.items.find((item)=>
    item.id===id)
    this.setState({
      items:filteredItems,
      item:editedItem.title,
      id:id,
      editItem:true,
     
    })

  }
handleDone=(id)=>{
  //get the index of the item with this id
  let itemsCopy = this.state.items
  let targetIndex = itemsCopy.findIndex(item => {return (item.id === id)});
  
  
  let check = itemsCopy[targetIndex].done;
  if(!check){
    itemsCopy[targetIndex].done = true;
    this.setState(
      {
        items: itemsCopy
      }
    )
  }else{
    itemsCopy[targetIndex].done = false;
    this.setState(
      {
        items: itemsCopy
      }
    )
  }
}

  render (){
        return (<div className="container">
          <div className="card-header">
      <h1 className="text-uppercase font-weight-bold text-center" id="todotitle">TODO LIST</h1>
           </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
          
          <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          />
          <div className="todoborder"></div>
          <TodoList items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleDone={this.handleDone}
          edit={this.editItem}
          />
            </div>
          </div>































         {/* <TodoList1/>  */}
       {/* <Forms/> */}
       {/* <h1 className={styles.success}>Success</h1> */}
          {/* <Inline/> */}
      {/* <StyleSheet obado={true} opiyo={false}/> */}
     {/* <NameList/> */}
      {/* */}
        {/* /* <ParentComponent/> */}
       {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
         {/* <Counter/>
          {/* <Message/> */}
      {/* <Greet/> */}
      {/* <Hello name="Wasaga" heroName="Solo">
        <p>I am also a serious full-stack coder</p>
        </Hello>
        <Hello name="Mbuthia" heroName="Kijana Mpienga">
        <button type="button"className="btn btn-success">ManU</button>
        </Hello>
        <Hello name="Albert" heroName="Hana Charger">
        <p>I am also a serious full-stack coder</p>
        </Hello> */}
        {/* <Welcome name="Wasaga" heroName="Solo">
        <p>I am also a serious full-stack coder</p>
        </Welcome>
        <Welcome name="Mbuthia" heroName="Kijana Mpienga">
        <button type="button"className="btn btn-success">ManU</button>
        </Welcome>
        <Welcome name="Albert" heroName="Hana Charger">
        <p>I am also a serious full-stack coder</p>
        </Welcome> */}
        </div>);
  } 
}

export default App;
