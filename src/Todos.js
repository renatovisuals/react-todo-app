import React, { Component } from 'react';


class Todos extends Component {
  constructor(props){
    super(props);
      this.state = {
      taskCompleted:false
    }

    this.updateOnClick = this.updateOnClick.bind(this);
  }

  updateOnClick(){
    this.setState({taskCompleted:!this.state.taskCompleted})
  }



  render() {
    return (
      <div className="todo-container">
        <div className = {`todo ${this.props.todo.isComplete ? "task-complete":null}`} onClick = {()=>{this.props.updateOnClick(this.props.todo.id)}}>
           <div onClick = {(e)=>{this.props.handleDelete(this.props.todo.id,e)}} className = "todo-delete">
             delete
           </div>
           <span> {this.props.todo.todoName} </span>
        </div>
      </div>
    );
  }
}

export default Todos;
