import React, { Component } from 'react';
import TodoInput from './TodoInput';
import Todos from './Todos';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        inputToggle:false,
        todos:[]
    }
    this.handleInputVisibility = this.handleInputVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
    this.updateOnClick = this.updateOnClick.bind(this);
}

 updateOnClick(id){
   var todoCopy = [...this.state.todos];
   for(var i in todoCopy){
     if(todoCopy[i].id === id){
       todoCopy[i].isComplete = !todoCopy[i].isComplete;
     }
   }
   this.setState({
     todos:todoCopy
   })
 }

 handleInputVisibility(){
  var toggle = !this.state.inputToggle;
  this.setState({
    inputToggle: toggle
  })
  }

  handleSubmit(todo){
    var newTodos = [todo,...this.state.todos];
    this.setState({
      todos:newTodos
    })
  }


  handleDelete(id,e){
    e.stopPropagation()
    var filteredTodos = [...this.state.todos];
    filteredTodos = filteredTodos.filter((todo)=>todo.id!==id);
    this.setState({
      todos:filteredTodos
    })
  }

  renderTodos(){
    var self = this;
    console.log(this.state.todos);
  return(
    this.state.todos.map(function(todo){
      return (
        <Todos todo = {todo} updateOnClick = {self.updateOnClick} key={todo.id} handleDelete = {self.handleDelete}> </Todos>
      )
    })
  )
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="app-title">
            <span> React to-do </span>
            <i onClick = {this.handleInputVisibility} className="fa fa-plus plus-icon"></i>
          </div>
          <TodoInput visible = {this.state.inputToggle} handleSubmit = {this.handleSubmit}>  </TodoInput>
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

export default App;
